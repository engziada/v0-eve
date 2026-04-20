'use client'

import { Download, ExternalLink, Zap, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { AppItem } from '@/lib/data'
import { carModels } from '@/lib/data'

interface AppCardProps {
  app: AppItem
}

const categoryIcons: Record<string, string> = {
  navigation: '🗺️',
  music: '🎵',
  video: '🎬',
  tools: '🔧',
  launchers: '🚀',
  firmware: '💾',
  beta: '⚠️',
}

export function AppCard({ app }: AppCardProps) {
  const compatibleModelNames = app.compatibleModels
    .filter((m) => m !== 'all')
    .map((m) => carModels.find((model) => model.id === m)?.name.replace('BYD ', ''))
    .filter(Boolean)

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80">
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-primary/10 to-transparent" />
      </div>

      <CardHeader className="relative pb-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-2xl">
              {categoryIcons[app.category] || '📱'}
            </div>
            <div>
              <h3 className="font-semibold leading-tight">{app.name}</h3>
              {app.version && (
                <p className="text-xs text-muted-foreground">v{app.version}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {app.isModded && (
              <Badge variant="secondary" className="border-primary/30 bg-primary/10 text-primary">
                <Zap className="mr-1 h-3 w-3" />
                MOD
              </Badge>
            )}
            {app.isBeta && (
              <Badge variant="secondary" className="border-amber-500/30 bg-amber-500/10 text-amber-500">
                <AlertTriangle className="mr-1 h-3 w-3" />
                BETA
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <p className="text-sm text-muted-foreground">{app.description}</p>

        {/* Compatible Models */}
        <div className="flex flex-wrap gap-1.5">
          {compatibleModelNames.slice(0, 4).map((name) => (
            <span
              key={name}
              className="rounded-md bg-secondary/80 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {name}
            </span>
          ))}
          {compatibleModelNames.length > 4 && (
            <span className="rounded-md bg-secondary/80 px-2 py-0.5 text-xs text-muted-foreground">
              +{compatibleModelNames.length - 4} more
            </span>
          )}
        </div>

        {/* Download Button */}
        <div className="flex items-center justify-between pt-2">
          {app.size && (
            <span className="text-xs text-muted-foreground">{app.size}</span>
          )}
          <Button
            size="sm"
            className="ml-auto gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="h-4 w-4" />
            Download
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
