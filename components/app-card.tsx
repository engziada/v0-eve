"use client";

import {
  Download,
  ExternalLink,
  Zap,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { App } from "@/lib/data";
import { carModels } from "@/lib/data";

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  const compatibleModelNames = app.compatibleModels
    .filter((m) => m !== "all")
    .map((m) => carModels.find((model) => model.id === m)?.name)
    .filter(Boolean);

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/70 transition-all hover:border-primary/40 hover:bg-card/90">
      {/* Subtle glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <CardHeader className="relative pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-sm font-semibold">{app.name}</h3>
              {app.isOfficial && (
                <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
              )}
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
              {app.version && (
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  v{app.version}
                </p>
              )}
              {app.version && (app.fileSize || app.lastUpdated) && (
                <span className="text-[10px] text-muted-foreground/40">•</span>
              )}
              {app.fileSize && (
                <p className="text-[10px] font-medium text-muted-foreground whitespace-nowrap bg-muted/40 px-1 rounded-sm">
                  {app.fileSize}
                </p>
              )}
              {app.fileSize && app.lastUpdated && (
                <span className="text-[10px] text-muted-foreground/40">•</span>
              )}
              {app.lastUpdated && (
                <p className="text-[10px] text-muted-foreground whitespace-nowrap">
                  {app.lastUpdated}
                </p>
              )}
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-1">
            {app.isMod && (
              <Badge
                variant="secondary"
                className="border-primary/30 bg-primary/10 px-1.5 py-0 text-[10px] text-primary"
              >
                <Zap className="mr-0.5 h-2.5 w-2.5" />
                MOD
              </Badge>
            )}
            {app.warning && (
              <Badge
                variant="secondary"
                className="border-amber-500/30 bg-amber-500/10 px-1.5 py-0 text-[10px] text-amber-500"
              >
                <AlertTriangle className="mr-0.5 h-2.5 w-2.5" />
                WARN
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-3 pt-0">
        <p className="line-clamp-2 text-xs text-muted-foreground">
          {app.description}
        </p>

        {/* Warning message if exists */}
        {app.warning && (
          <p className="text-[10px] leading-relaxed text-amber-500/80">
            {app.warning}
          </p>
        )}

        {/* Compatible Models */}
        <div className="flex flex-wrap gap-1">
          {compatibleModelNames.slice(0, 3).map((name) => (
            <span
              key={name}
              className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] text-muted-foreground"
            >
              {name}
            </span>
          ))}
          {compatibleModelNames.length > 3 && (
            <span className="rounded bg-secondary/80 px-1.5 py-0.5 text-[10px] text-muted-foreground">
              +{compatibleModelNames.length - 3}
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
            href={app.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-3.5 w-3.5" />
            Download
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
