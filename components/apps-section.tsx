"use client";

import { useState, useMemo } from "react";
import {
  apps,
  appCategories,
  carModels,
  type CarModelId,
  type AppCategoryId,
} from "@/lib/data";
import { AppCard } from "./app-card";
import { Package, Navigation, Music, Play, Settings, Layout, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ReactNode> = {
  all: <Package className="h-4 w-4" />,
  navigation: <Navigation className="h-4 w-4" />,
  music: <Music className="h-4 w-4" />,
  video: <Play className="h-4 w-4" />,
  tools: <Settings className="h-4 w-4" />,
  launchers: <Layout className="h-4 w-4" />,
  beta: <FlaskConical className="h-4 w-4" />,
};

export function AppsSection() {
  const [selectedModel, setSelectedModel] = useState<CarModelId>("all");
  const [selectedCategory, setSelectedCategory] = useState<AppCategoryId>("all");

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesModel =
        selectedModel === "all" || app.compatibleModels.includes(selectedModel);
      const matchesCategory =
        selectedCategory === "all" || app.category === selectedCategory;
      return matchesModel && matchesCategory;
    });
  }, [selectedModel, selectedCategory]);

  const groupedApps = useMemo(() => {
    if (selectedCategory !== "all") {
      return { [selectedCategory]: filteredApps };
    }
    return filteredApps.reduce(
      (acc, app) => {
        if (!acc[app.category]) {
          acc[app.category] = [];
        }
        acc[app.category].push(app);
        return acc;
      },
      {} as Record<string, typeof filteredApps>
    );
  }, [filteredApps, selectedCategory]);

  return (
    <section id="apps" className="scroll-mt-16">
      {/* Sticky Filter Bar */}
      <div className="sticky top-16 z-40 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          {/* Car Model Filter */}
          <div className="mb-3">
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Car Model
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {carModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium transition-all sm:px-4 sm:py-1.5 sm:text-sm",
                    selectedModel === model.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Category
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {appCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all sm:px-4 sm:py-1.5 sm:text-sm",
                    selectedCategory === category.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  {categoryIcons[category.id]}
                  {category.name}
                </button>
              ))}
            </div>
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
              Try adjusting your filters to find compatible apps.
            </p>
          </div>
        ) : (
          Object.entries(groupedApps).map(([categoryId, categoryApps]) => {
            const category = appCategories.find((c) => c.id === categoryId);
            return (
              <div key={categoryId} className="mb-10 last:mb-0">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {categoryIcons[categoryId]}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{category?.name}</h2>
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
