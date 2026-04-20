'use client'

import { useState, useMemo } from 'react'
import { apps, appCategories, type CarModel, type AppCategory } from '@/lib/data'
import { FilterBar } from './filter-bar'
import { AppCard } from './app-card'
import { Package } from 'lucide-react'

export function AppsSection() {
  const [selectedModel, setSelectedModel] = useState<CarModel>('all')
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | 'all'>('all')

  const filteredApps = useMemo(() => {
    return apps.filter((app) => {
      const matchesModel =
        selectedModel === 'all' || app.compatibleModels.includes(selectedModel)
      const matchesCategory =
        selectedCategory === 'all' || app.category === selectedCategory
      return matchesModel && matchesCategory
    })
  }, [selectedModel, selectedCategory])

  const groupedApps = useMemo(() => {
    if (selectedCategory !== 'all') {
      return { [selectedCategory]: filteredApps }
    }
    return filteredApps.reduce(
      (acc, app) => {
        if (!acc[app.category]) {
          acc[app.category] = []
        }
        acc[app.category].push(app)
        return acc
      },
      {} as Record<string, typeof filteredApps>
    )
  }, [filteredApps, selectedCategory])

  return (
    <section id="apps" className="min-h-screen">
      <FilterBar
        selectedModel={selectedModel}
        selectedCategory={selectedCategory}
        onModelChange={setSelectedModel}
        onCategoryChange={setSelectedCategory}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {filteredApps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">No apps found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to find compatible apps.
            </p>
          </div>
        ) : (
          Object.entries(groupedApps).map(([categoryId, categoryApps]) => {
            const category = appCategories.find((c) => c.id === categoryId)
            return (
              <div key={categoryId} className="mb-12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-2xl">{category?.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold">{category?.name}</h2>
                    <p className="text-sm text-muted-foreground" dir="rtl">
                      {category?.nameAr}
                    </p>
                  </div>
                  <div className="ml-auto rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                    {categoryApps.length} {categoryApps.length === 1 ? 'app' : 'apps'}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              </div>
            )
          })
        )}
      </div>
    </section>
  )
}
