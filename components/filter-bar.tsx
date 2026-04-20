'use client'

import { carModels, appCategories, type CarModel, type AppCategory } from '@/lib/data'
import { cn } from '@/lib/utils'

interface FilterBarProps {
  selectedModel: CarModel
  selectedCategory: AppCategory | 'all'
  onModelChange: (model: CarModel) => void
  onCategoryChange: (category: AppCategory | 'all') => void
}

export function FilterBar({
  selectedModel,
  selectedCategory,
  onModelChange,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-16 z-40 border-b border-border/50 bg-background/80 py-4 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Car Model Filter */}
        <div className="mb-4">
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Filter by Car Model
          </h3>
          <div className="flex flex-wrap gap-2">
            {carModels.map((model) => (
              <button
                key={model.id}
                onClick={() => onModelChange(model.id)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-all',
                  selectedModel === model.id
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border/50 bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
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
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange('all')}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-all',
                selectedCategory === 'all'
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border/50 bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
              )}
            >
              All Categories
            </button>
            {appCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm font-medium transition-all',
                  selectedCategory === category.id
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border/50 bg-secondary/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
