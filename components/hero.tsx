'use client'

import { ArrowDown, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Background Grid Effect */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Gradient Orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[128px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/10 blur-[96px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
          <Shield className="h-4 w-4" />
          <span>Trusted by the Egyptian BYD Community</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Your BYD EV
          <span className="block text-primary">App Essentials</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          All trusted apps, mod APKs, stock firmware, and launchers for your BYD head unit — 
          organized by car model and category.
        </p>

        {/* Arabic Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-base text-muted-foreground/80" dir="rtl">
          جميع التطبيقات الموثوقة والبرامج المعدلة والبرامج الثابتة والمشغلات لنظام BYD الخاص بك
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="min-w-[180px] gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Browse Apps
            <ArrowDown className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="min-w-[180px] border-border/50 hover:bg-secondary">
            View Firmware
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8">
          <div>
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Trusted Apps</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">Car Models</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">DiLink Versions</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
