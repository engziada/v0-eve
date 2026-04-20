'use client'

import { Download, ExternalLink, HardDrive } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { firmwareList, carModels } from '@/lib/data'

export function FirmwareSection() {
  return (
    <section id="firmware" className="border-t border-border/50 bg-secondary/20 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <HardDrive className="h-4 w-4" />
            <span>Stock Firmware</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            DiLink System Updates
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Official firmware resources and version branches for all DiLink systems.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground/80" dir="rtl">
            موارد البرامج الثابتة الرسمية وفروع الإصدارات لجميع أنظمة DiLink
          </p>
        </div>

        {/* Firmware Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {firmwareList.map((firmware) => {
            const compatibleModelNames = firmware.compatibleModels
              .filter((m) => m !== 'all')
              .map((m) => carModels.find((model) => model.id === m)?.name.replace('BYD ', ''))
              .filter(Boolean)

            return (
              <Card
                key={firmware.id}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-b from-primary/10 to-transparent" />
                </div>

                <CardHeader className="relative pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge
                        variant="secondary"
                        className="mb-2 border-primary/30 bg-primary/10 text-primary"
                      >
                        {firmware.diLinkVersion}
                      </Badge>
                      <h3 className="font-semibold">{firmware.name}</h3>
                      {firmware.version && (
                        <p className="text-xs text-muted-foreground">
                          Version {firmware.version}
                        </p>
                      )}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-2xl">
                      💾
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <p className="text-sm text-muted-foreground">{firmware.description}</p>

                  {/* Compatible Models */}
                  <div className="flex flex-wrap gap-1.5">
                    {compatibleModelNames.map((name) => (
                      <span
                        key={name}
                        className="rounded-md bg-secondary/80 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {name}
                      </span>
                    ))}
                  </div>

                  {/* Download Button */}
                  <Button
                    className="w-full gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="h-4 w-4" />
                    Download Firmware
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
