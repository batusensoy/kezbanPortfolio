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
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#E8E2D9]">
      {/* Category Filter Pills with layoutId spring indicator */}
      <div className="flex flex-wrap items-center gap-2">
        {ARTWORK_CATEGORIES.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-colors duration-200 select-none ${
                isSelected ? 'text-canvas' : 'text-charcoal-muted hover:text-charcoal bg-canvas-subtle/60'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-charcoal rounded-full"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Right side: Available-only toggle & artwork count */}
      <div className="flex items-center space-x-4 self-end lg:self-center">
        <button
          onClick={() =>
            onToggleStatusFilter(activeStatusFilter === 'all' ? 'available' : 'all')
          }
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center space-x-2 ${
            activeStatusFilter === 'available'
              ? 'bg-olive text-canvas border-olive shadow-sm'
              : 'border-[#E3DDD5] text-charcoal-muted hover:text-charcoal hover:border-charcoal/40'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              activeStatusFilter === 'available' ? 'bg-canvas' : 'bg-olive'
            }`}
          />
          <span>Available Only</span>
        </button>

        <span className="text-xs text-charcoal-muted font-sans font-light">
          Showing <span className="font-medium text-charcoal">{count}</span> {count === 1 ? 'artwork' : 'artworks'}
        </span>
      </div>
    </div>
  );
}

