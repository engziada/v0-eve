'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">B</span>
            </div>
            <div>
              <span className="text-lg font-semibold tracking-tight">BYD Egypt</span>
              <span className="ml-2 text-sm text-muted-foreground">EV Hub</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#apps"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Apps
            </Link>
            <Link
              href="#firmware"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Firmware
            </Link>
            <Link
              href="#guides"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Guides
            </Link>
            <Link
              href="#community"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Community
            </Link>
          </nav>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span>for Egypt</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BYD Egypt EV Hub. Community-driven, not affiliated with BYD.
          </p>
          <p className="text-xs text-muted-foreground" dir="rtl">
            مشروع مجتمعي، غير مرتبط رسمياً بشركة BYD
          </p>
        </div>
      </div>
    </footer>
  )
}
