"use client";

import {
  FileText,
  ExternalLink,
  Book,
  Wrench,
  Code,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { documentationLinks } from "@/lib/data";

const typeIcons: Record<string, React.ReactNode> = {
  manual: <Book className="h-4 w-4" />,
  guide: <Lightbulb className="h-4 w-4" />,
  repair: <Wrench className="h-4 w-4" />,
  technical: <Code className="h-4 w-4" />,
};

const typeColors: Record<string, string> = {
  manual: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  guide: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  repair: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  technical: "bg-violet-500/10 text-violet-400 border-violet-500/30",
};

export function DocsSection() {
  return (
    <section
      id="documentation"
      className="scroll-mt-16 border-t border-border/50 py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center lg:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <FileText className="h-4 w-4" />
            <span>Documentation</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Manuals & Technical Docs
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Official manuals, repair guides, and technical documentation for BYD
            vehicles.
          </p>
          <p
            className="mx-auto mt-1.5 max-w-2xl text-xs text-muted-foreground/80"
            dir="rtl"
          >
            أدلة رسمية وأدلة الإصلاح والوثائق التقنية لسيارات BYD
          </p>
        </div>

        {/* Docs Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {documentationLinks.map((doc) => (
            <Card
              key={doc.id}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <CardContent className="flex items-start gap-3 p-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${typeColors[doc.type]}`}
                >
                  {typeIcons[doc.type]}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-semibold">{doc.name}</h4>
                  <p className="mt-0.5 text-xs text-muted-foreground" dir="rtl">
                    {doc.nameAr}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-[10px] text-muted-foreground">
                    {doc.description}
                  </p>
                  {doc.models && doc.models.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {doc.models.slice(0, 3).map((model) => (
                        <span
                          key={model}
                          className="rounded bg-secondary px-1.5 py-0.5 text-[9px] capitalize text-muted-foreground"
                        >
                          {model.replace("-", " ")}
                        </span>
                      ))}
                      {doc.models.length > 3 && (
                        <span className="rounded bg-secondary px-1.5 py-0.5 text-[9px] text-muted-foreground">
                          +{doc.models.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="shrink-0 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={doc.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
