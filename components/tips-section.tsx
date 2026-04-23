"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Lightbulb, PlayCircle, ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface Tip {
  id: string;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  keywords: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export function TipsSection() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [query, setQuery] = useState("");
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState("");

  useEffect(() => {
    fetch("/data/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Failed to load tips:", err));
  }, []);

  const filteredTips = useMemo(() => {
    if (!query.trim()) return tips;
    
    const lowerQuery = query.toLowerCase();
    return tips.filter((tip) => {
      const textToSearch = `
        ${tip.title} ${tip.titleAr} 
        ${tip.content} ${tip.contentAr} 
        ${tip.keywords.join(" ")}
      `.toLowerCase();
      
      return textToSearch.includes(lowerQuery);
    });
  }, [tips, query]);

  // Expand accordion automatically if searching
  useEffect(() => {
    if (query.trim().length > 0) {
      setIsOpen("tips-list");
    }
  }, [query]);

  return (
    <section id="tips" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
            Do You Know? <span className="text-muted-foreground font-normal">| تعالى أقولك</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            {language === "en" 
              ? "Quick expert solutions to the most common BYD Head Unit issues. Knowledge transfer from the community, directly to you." 
              : "حلول سريعة لأكثر المشاكل شيوعاً في شاشات سيارات BYD. نقل المعرفة من المجتمع إليك مباشرة."}
          </p>
        </div>

        <Accordion type="single" collapsible value={isOpen} onValueChange={setIsOpen} className="w-full">
          <AccordionItem value="tips-list" className="border rounded-2xl bg-card shadow-sm px-2">
            <AccordionTrigger className="hover:no-underline py-4 px-4 text-left">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span className="font-semibold">{t("View Knowledge Base & Search", "تصفح قاعدة المعرفة والبحث")}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t px-2 py-6">
              
              <div className="mx-auto max-w-2xl mb-12">
                <div className="relative">
                  <Search className={`absolute ${language === "ar" ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground`} />
                  <Input
                    className={`h-12 rounded-full border-border/50 bg-background/50 focus-visible:ring-primary shadow-sm ${language === "ar" ? "pr-10 text-right" : "pl-10"}`}
                    placeholder={t("Search issues, features, or keywords in English or Arabic...", "ابحث عن المشاكل أو الميزات باللغة العربية أو الإنجليزية...")}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredTips.map((tip) => (
                  <Card key={tip.id} className="overflow-hidden border-border/50 bg-background/50 hover:bg-background/80 transition-colors">
                    <CardHeader className="pb-3 border-b border-border/10 bg-muted/10">
                      <CardTitle className="text-lg leading-tight mb-1">
                        {language === "en" ? tip.title : tip.titleAr}
                      </CardTitle>
                      <CardDescription className={`text-sm font-medium text-foreground/80 ${language === "en" ? "dir-rtl text-right" : "text-left"}`}>
                        {language === "en" ? tip.titleAr : tip.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 flex flex-col gap-4">
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <div dir={language === "en" ? "ltr" : "rtl"}>
                          <span className="font-semibold text-foreground block mb-1">
                            {t("Expert Solution:", "حل الخبراء:")}
                          </span>
                          <p className="whitespace-pre-line leading-relaxed">
                            {language === "en" 
                              ? tip.content.replace('**Expert Solution:**', '').trim() 
                              : tip.contentAr.replace('**حل الخبراء:**', '').trim()}
                          </p>
                        </div>
                        
                        <div dir={language === "en" ? "rtl" : "ltr"}>
                          <p className="whitespace-pre-line leading-relaxed mt-2 p-3 bg-muted/30 rounded-lg border border-border/20 text-right">
                            {language === "en" 
                              ? tip.contentAr.replace('**حل الخبراء:**', '').trim() 
                              : tip.content.replace('**Expert Solution:**', '').trim()}
                          </p>
                        </div>
                      </div>

                      {tip.keywords && tip.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-border/10" dir={language === "ar" ? "rtl" : "ltr"}>
                          {tip.keywords.slice(0, 5).map((kw, i) => (
                            <Badge key={i} variant="secondary" className="text-[10px] bg-secondary/50 text-secondary-foreground/70">
                              {kw}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {(tip.videoUrl || tip.imageUrl) && (
                        <div className={`flex gap-2 pt-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                          {tip.videoUrl && (
                            <a href={tip.videoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-blue-500 hover:text-blue-600 bg-blue-500/10 px-2.5 py-1.5 rounded-md transition-colors">
                              <PlayCircle className="h-3.5 w-3.5" /> {t("Watch Video", "شاهد الفيديو")}
                            </a>
                          )}
                          {tip.imageUrl && (
                            <a href={tip.imageUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-orange-500 hover:text-orange-600 bg-orange-500/10 px-2.5 py-1.5 rounded-md transition-colors">
                              <ImageIcon className="h-3.5 w-3.5" /> {t("View Image", "عرض الصورة")}
                            </a>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredTips.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                  {t("No solutions found matching", "لا يوجحد حلول تطابق")} "{query}". {t("Try a different keyword!", "جرب كلمة بحث أخرى!")}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
