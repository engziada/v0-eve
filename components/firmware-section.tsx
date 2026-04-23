"use client";

import { Download, ExternalLink, HardDrive, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { firmwares, carModels } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FirmwareSection() {
  const { t, language } = useLanguage();
  return (
    <section
      id="firmware"
      className="scroll-mt-16 border-t border-border/50 bg-card/20 py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center lg:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <HardDrive className="h-4 w-4" />
            <span>{t("Stock Firmware", "البرامج الثابتة الأصلية")}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {t("DiLink System Updates", "تحديثات نظام دي لينك")}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground font-medium">
            {language === "en" ? 
              "Latest firmware picks per model group, resolved only from the shared Yandex archive." :
              "أحدث حزم البرامج الثابتة لكل مجموعة موديلات، ومصدرها فقط أرشيف ياندكس المشترك."}
          </p>
        </div>

        {/* Firmware Accordion (Starts collapsed) */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="firmware-list" className="border rounded-2xl bg-card shadow-sm px-2">
            <AccordionTrigger className="hover:no-underline py-4 px-4 text-left">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-primary" />
                <span className="font-semibold">{t("View All Firmware Updates", "عرض جميع تحديثات البرامج")}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t px-2 py-6">
              {/* Firmware Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {firmwares.map((firmware) => {
                  const compatibleModelNames = firmware.compatibleModels
                    .filter((m) => m !== "all")
                    .map((m) => carModels.find((model) => model.id === m)?.name)
                    .filter(Boolean);

                  return (
                    <Card
                      key={firmware.id}
                      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/80"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-primary/5 to-transparent" />
                      </div>

                      <CardHeader className="relative pb-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <Badge
                              variant="secondary"
                              className="mb-2 border-primary/30 bg-primary/10 px-2 py-0 text-xs text-primary"
                            >
                              {firmware.dilink}
                            </Badge>
                            <h3 className="truncate text-sm font-semibold">
                              {firmware.name}
                            </h3>
                            {firmware.version && (
                              <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
                                {firmware.version}
                              </p>
                            )}
                          </div>
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                            <Cpu className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="relative space-y-3 pt-0">
                        <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                          <p className="line-clamp-2" dir={language === "en" ? "ltr" : "rtl"}>
                            {language === "en" ? firmware.description : firmware.descriptionAr}
                          </p>
                        </div>

                        {firmware.chipset && (
                          <p className="text-[10px] text-primary/80">
                            {t("Chipset:", "شريحة:")} {firmware.chipset}
                          </p>
                        )}

                        {/* Compatible Models */}
                        <div className="flex flex-wrap gap-1">
                          {compatibleModelNames.length > 0 ? (
                            compatibleModelNames.map((name) => (
                              <span
                                key={name}
                                className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                              >
                                {name}
                              </span>
                            ))
                          ) : (
                            <span className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                              {t("All Models", "كل الموديلات")}
                            </span>
                          )}
                        </div>

                        {/* Download Button */}
                        <Button
                          size="sm"
                          className="w-full gap-2 bg-primary/10 text-xs text-primary hover:bg-primary hover:text-primary-foreground"
                          asChild
                        >
                          <a
                            href={firmware.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-3.5 w-3.5" />
                            {t("Download", "تحميل")}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
