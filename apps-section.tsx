"use client";

import { useMemo, useState } from "react";
import {
  apps,
  appCategories,
  carModels,
  type CarModelId,
  type AppCategoryId,
} from "@/lib/data";
import { AppCard } from "./app-card";
import {
  Package,
  Navigation,
  Music,
  Play,
  Settings,
  Layout,
  FlaskConical,
  MessageCircle,
  Car,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const categoryIcons: Record<string, React.ReactNode> = {
  all: <Package className="h-4 w-4" />,
  navigation: <Navigation className="h-4 w-4" />,
  music: <Music className="h-4 w-4" />,
  video: <Play className="h-4 w-4" />,
  launchers: <Layout className="h-4 w-4" />,
  tools: <Settings className="h-4 w-4" />,
  carplay: <Car className="h-4 w-4" />,
  communication: <MessageCircle className="h-4 w-4" />,
  beta: <FlaskConical className="h-4 w-4" />,
};

export function AppsSection() {
  const [selectedModel, setSelectedModel] = useState<CarModelId>("all");
  const [selectedCategory, setSelectedCategory] = useState<AppCategoryId>("all");
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter((app) => {
      const matchesModel =
        selectedModel === "all" || app.compatibleModels.includes(selectedModel);
      const matchesCategory =
        selectedCategory === "all" || app.category === selectedCategory;
      const matchesQuery =
        !q ||
        app.name.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q);
      return matchesModel && matchesCategory && matchesQuery;
    });
  }, [selectedModel, selectedCategory, query]);

  const groupedApps = useMemo(() => {
    if (selectedCategory !== "all") {
      return { [selectedCategory]: filteredApps };
    }
    return filteredApps.reduce(
      (acc, app) => {
        (acc[app.category] ||= []).push(app);
        return acc;
      },
      {} as Record<string, typeof filteredApps>,
    );
  }, [filteredApps, selectedCategory]);

  const hasActiveFilter =
    selectedModel !== "all" || selectedCategory !== "all" || query.length > 0;

  const resetFilters = () => {
    setSelectedModel("all");
    setSelectedCategory("all");
    setQuery("");
  };

  return (
    <section id="apps" className="scroll-mt-16">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 pt-10 lg:px-8 lg:pt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Applications
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Head-unit APK Library
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Direct APK downloads sourced from trusted mirrors. Play Store does
              not run on BYD head units.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary" />
            {apps.length} apps indexed
          </div>
        </div>
      </div>

      {/* Redesigned Filter Toolbar */}
      <div className="sticky top-16 z-30 mt-6 border-y border-border/50 bg-background/80 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 py-3 lg:px-8">
          <div className="rounded-2xl border border-border/50 bg-card/60 p-3 shadow-[0_18px_45px_-32px_rgba(0,0,0,0.9)]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search apps, mods, launchers, or tools"
                    className="h-11 border-border/50 bg-background/70 pl-9 pr-3 text-sm"
                    aria-label="Search apps"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                  <div className="rounded-xl border border-border/50 bg-background/60 px-3 py-2 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Showing
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {filteredApps.length} results
                    </p>
                  </div>

                  <button
                    onClick={() => setFiltersOpen((v) => !v)}
                    className={cn(
                      "inline-flex h-full min-h-11 items-center justify-center gap-2 rounded-xl border px-3 text-xs font-medium transition-colors",
                      filtersOpen || hasActiveFilter
                        ? "border-primary/50 bg-primary/12 text-primary"
                        : "border-border/50 bg-background/60 text-muted-foreground hover:text-foreground",
                    )}
                    aria-expanded={filtersOpen}
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>Filters</span>
                    {hasActiveFilter && (
                      <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                        {[
                          selectedModel !== "all",
                          selectedCategory !== "all",
                          query.length > 0,
                        ].filter(Boolean).length}
                      </span>
                    )}
                  </button>

                  {hasActiveFilter && (
                    <button
                      onClick={resetFilters}
                      className="inline-flex min-h-11 items-center justify-center gap-1 rounded-xl border border-border/50 bg-background/60 px-3 text-xs text-muted-foreground transition-colors hover:text-foreground"
                      aria-label="Clear filters"
                    >
                      <X className="h-3.5 w-3.5" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Jump to
                </span>
                {appCategories
                  .filter((category) => category.id !== "all")
                  .map((category) => (
                    <a
                      key={category.id}
                      href={`#apps-${category.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/70 px-3 py-1.5 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {categoryIcons[category.id]}
                      {category.name}
                    </a>
                  ))}
              </div>
            </div>

            {/* Active filter chips (always visible when active) */}
            {hasActiveFilter && !filtersOpen && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {selectedCategory !== "all" && (
                  <FilterChip
                    label={
                      appCategories.find((c) => c.id === selectedCategory)?.name ||
                      ""
                    }
                    icon={categoryIcons[selectedCategory]}
                    onClear={() => setSelectedCategory("all")}
                  />
                )}
                {selectedModel !== "all" && (
                  <FilterChip
                    label={carModels.find((m) => m.id === selectedModel)?.name || ""}
                    icon={<Car className="h-3 w-3" />}
                    onClear={() => setSelectedModel("all")}
                  />
                )}
              </div>
            )}

            {/* Collapsible filter panel */}
            {filtersOpen && (
              <div className="mt-3 grid gap-3 border-t border-border/40 pt-3 lg:grid-cols-[1.35fr_1fr]">
                <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Category
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {appCategories.map((category) => (
                      <FilterPill
                        key={category.id}
                        active={selectedCategory === category.id}
                        icon={categoryIcons[category.id]}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </FilterPill>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/40 bg-background/50 p-3">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Car Model
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {carModels.map((model) => (
                      <FilterPill
                        key={model.id}
                        active={selectedModel === model.id}
                        onClick={() => setSelectedModel(model.id)}
                      >
                        {model.name}
                      </FilterPill>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
        {filteredApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <Package className="h-7 w-7 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-base font-semibold">No apps found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or search query.
            </p>
          </div>
        ) : (
          Object.entries(groupedApps).map(([categoryId, categoryApps]) => {
            const category = appCategories.find((c) => c.id === categoryId);
            return (
              <div
                key={categoryId}
                id={`apps-${categoryId}`}
                className="mb-10 scroll-mt-40 last:mb-0"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {categoryIcons[categoryId]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{category?.name}</h3>
                    <p className="text-xs text-muted-foreground" dir="rtl">
                      {category?.nameAr}
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
                    {categoryApps.length}
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

/* ---------- internal UI helpers ---------- */

function FilterPill({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border/50 bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {icon}
      {children}
    </button>
  );
}

function FilterChip({
  label,
  icon,
  onClear,
}: {
  label: string;
  icon?: React.ReactNode;
  onClear: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] text-primary">
      {icon}
      {label}
      <button
        onClick={onClear}
        className="ml-0.5 rounded-full p-0.5 hover:bg-primary/20"
        aria-label={`Remove ${label} filter`}
      >
        <X className="h-2.5 w-2.5" />
      </button>
    </span>
  );
}
