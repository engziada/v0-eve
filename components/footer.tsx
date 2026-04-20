"use client";

import Link from "next/link";
import { Zap, Heart } from "lucide-react";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight">
                Egypt-EV
              </span>
              <span className="text-[10px] text-muted-foreground">
                By Z Solutions
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Made with love */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
            <span>for Egypt</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-center md:flex-row md:text-left">
          <p className="text-[10px] text-muted-foreground sm:text-xs">
            &copy; {new Date().getFullYear()} Egypt-EV by Z Solutions. Community-driven,
            not affiliated with BYD.
          </p>
          <p
            className="text-[10px] text-muted-foreground sm:text-xs"
            dir="rtl"
          >
            مشروع مجتمعي، غير مرتبط رسمياً بشركة BYD
          </p>
        </div>
      </div>
    </footer>
  );
}
