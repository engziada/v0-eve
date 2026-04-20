"use client";

import { BookOpen, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { guides } from "@/lib/data";

export function GuidesSection() {
  return (
    <section id="guides" className="scroll-mt-16 border-t border-border/50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center lg:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <BookOpen className="h-4 w-4" />
            <span>Tutorials & Guides</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Installation Guides
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Step-by-step instructions to get everything working on your BYD head
            unit.
          </p>
          <p
            className="mx-auto mt-1.5 max-w-2xl text-xs text-muted-foreground/80"
            dir="rtl"
          >
            تعليمات خطوة بخطوة لتشغيل كل شيء على نظام BYD الخاص بك
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Card
              key={guide.id}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold">{guide.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground" dir="rtl">
                      {guide.titleAr}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="shrink-0 border-primary/30 bg-primary/10 px-2 py-0 text-[10px] text-primary"
                  >
                    {guide.id === "silentinstaller"
                      ? "Leopard/Denza"
                      : guide.id === "microg-install"
                        ? "Required"
                        : "All Models"}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 pt-0">
                <p className="text-xs text-muted-foreground">
                  {guide.description}
                </p>

                {/* Warning if exists */}
                {guide.warning && (
                  <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 p-2">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                    <p className="text-[10px] leading-relaxed text-amber-500/90">
                      {guide.warning}
                    </p>
                  </div>
                )}

                {/* Steps */}
                <ol className="space-y-1.5">
                  {guide.steps.slice(0, 4).map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-[11px]">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[9px] font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                  {guide.steps.length > 4 && (
                    <li className="pl-6 text-[10px] text-primary">
                      +{guide.steps.length - 4} more steps...
                    </li>
                  )}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
