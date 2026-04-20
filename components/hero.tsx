"use client";

import Image from "next/image";
import { Zap, Car, Download, Users } from "lucide-react";
import { apps, firmwares, communityLinks, carModels } from "@/lib/data";

export function Hero() {
  const stats = [
    { icon: Download, value: `${apps.length}+`, label: "Apps" },
    { icon: Car, value: `${carModels.length - 1}`, label: "Car Models" },
    { icon: Zap, value: `${firmwares.length}+`, label: "Firmware" },
    { icon: Users, value: `${communityLinks.length}+`, label: "Communities" },
  ];

  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="BYD Electric Vehicles"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Egypt Flag Accent - Horizontal stripes */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-red-900/20 via-red-800/10 to-transparent" />
        <div className="absolute inset-x-0 top-1/3 h-1/3 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 via-neutral-900/20 to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Accent Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            BYD EV Community Egypt
          </span>
        </div>

        {/* Logo / Title */}
        <h1 className="mb-3 text-balance text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Egypt-
          <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            EV
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-2 text-base font-semibold tracking-wide text-muted-foreground sm:text-lg">
          By Z Solutions
        </p>

        {/* Description */}
        <p className="mb-4 max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
          Your trusted source for BYD head unit apps, mod APKs, stock firmware,
          launchers, and community resources.
        </p>

        {/* Arabic Description */}
        <p
          className="mb-8 max-w-xl text-balance text-sm text-muted-foreground/80"
          dir="rtl"
        >
          مصدرك الموثوق لتطبيقات وحدة BYD والبرامج المعدلة والبرامج الثابتة
          ومشغلات السيارات وموارد المجتمع
        </p>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#apps"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/30 sm:px-6 sm:py-3"
          >
            <Download className="h-4 w-4" />
            Browse Apps
          </a>
          <a
            href="#community"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-card sm:px-6 sm:py-3"
          >
            <Users className="h-4 w-4" />
            Join Community
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border/40 bg-card/40 p-4 backdrop-blur-sm"
            >
              <stat.icon className="h-5 w-5 text-primary" />
              <span className="text-xl font-bold text-foreground sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-[11px] text-muted-foreground sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-10 text-[11px] text-muted-foreground/70 sm:text-xs">
          &copy; {new Date().getFullYear()} Egypt-EV by Z Solutions. All rights
          reserved.
        </p>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
