'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ARTWORK_CATEGORIES, ArtworkCategory } from '@/data/artworks';

interface ArtworkFiltersProps {
  activeCategory: 'All' | ArtworkCategory;
  onSelectCategory: (category: 'All' | ArtworkCategory) => void;
  activeStatusFilter: 'all' | 'available';
  onToggleStatusFilter: (status: 'all' | 'available') => void;
  count: number;
}

export function ArtworkFilters({
  activeCategory,
  onSelectCategory,
  activeStatusFilter,
  onToggleStatusFilter,
  count,
}: ArtworkFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pb-10 border-b border-charcoal/10">
      {/* Category filters — underline style, lowercase, editorial */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {ARTWORK_CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="relative text-sm font-light pb-0.5 transition-colors select-none"
            >
              <span
                className={
                  isSelected
                    ? 'text-charcoal font-normal'
                    : 'text-charcoal/40 hover:text-charcoal/70'
                }
              >
                {category.toLowerCase()}
              </span>
              {isSelected && (
                <motion.div
                  layoutId="activeCategoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-terracotta"
                  transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Right: available toggle + count */}
      <div className="flex items-center gap-5 self-end sm:self-center">
        <button
          onClick={() =>
            onToggleStatusFilter(activeStatusFilter === 'all' ? 'available' : 'all')
          }
          className="flex items-center gap-2 text-xs text-charcoal/50 hover:text-charcoal transition-colors"
        >
          <span
            className={`w-2 h-2 rounded-full border transition-colors ${
              activeStatusFilter === 'available'
                ? 'bg-terracotta border-terracotta'
                : 'bg-transparent border-charcoal/30'
            }`}
          />
          available only
        </button>

        <span className="text-xs text-charcoal/35 font-light">
          {count} {count === 1 ? 'painting' : 'paintings'}
        </span>
      </div>
    </div>
  );
}
