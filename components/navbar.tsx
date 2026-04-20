"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems, appCategories } from "@/lib/data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight text-foreground">
              Egypt-EV
            </span>
            <span className="text-[10px] text-muted-foreground">
              By Z Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {/* Apps Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-sm">
                Apps
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="#apps-all">All Apps</Link>
              </DropdownMenuItem>
              {appCategories
                .filter((c) => c.id !== "all")
                .map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link href={`#apps-${category.id}`}>{category.name}</Link>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems
            .filter((item) => item.id !== "apps")
            .map((item) => (
              <Button key={item.id} variant="ghost" className="text-sm" asChild>
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {/* Apps Section */}
            <div className="space-y-1">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Apps
              </p>
              <Link
                href="#apps-all"
                className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
                onClick={closeMobile}
              >
                All Apps
              </Link>
              {appCategories
                .filter((c) => c.id !== "all")
                .map((category) => (
                  <Link
                    key={category.id}
                    href={`#apps-${category.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary"
                    onClick={closeMobile}
                  >
                    {category.name}
                  </Link>
                ))}
            </div>

            {/* Other Links */}
            <div className="space-y-1 border-t border-border/50 pt-4">
              {navItems
                .filter((item) => item.id !== "apps")
                .map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    onClick={closeMobile}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
