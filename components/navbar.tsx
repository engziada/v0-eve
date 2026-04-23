"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown, Zap, SearchIcon, Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems, appCategories } from "@/lib/data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 shadow-sm">
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
              {t("By Z Solutions", "بواسطة زي سولوشنز")}
            </span>
          </div>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <Button 
            variant="outline" 
            className="mr-2 h-9 w-64 justify-start text-sm text-muted-foreground border-border/50 bg-background/50 hover:bg-accent/40"
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <span className="inline-flex hidden lg:inline">{t("Search apps, firmware...", "البحث عن التطبيقات...")}</span>
            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          {/* Apps Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-sm">
                {language === "en" ? "Apps" : "التطبيقات"}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="#apps">{language === "en" ? "All Apps" : "كل التطبيقات"}</Link>
              </DropdownMenuItem>
              {appCategories
                .filter((c) => c.id !== "all")
                .map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link href={`#apps-${category.id}`}>{language === "en" ? category.name : category.nameAr}</Link>
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems
            .filter((item) => item.id !== "apps")
            .map((item) => (
              <Button key={item.id} variant="ghost" className="text-sm" asChild>
                <Link href={item.href}>{language === "en" ? item.name : item.nameAr}</Link>
              </Button>
            ))}

          <div className="ml-2 flex items-center gap-1 border-l pl-2 border-border/50">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="px-2"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            >
              <Languages className="h-4 w-4 mr-1" />
              <span className="text-xs font-semibold">{language === "en" ? "AR" : "EN"}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-1 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="px-2 h-8 w-8 min-w-8"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          >
            <span className="text-xs font-semibold">{language === "en" ? "AR" : "EN"}</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {/* Apps Section */}
            <div className="space-y-1">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Apps
              </p>
              <Link
                href="#apps"
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
