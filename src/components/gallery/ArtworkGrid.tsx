'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ARTWORKS, ArtworkCategory } from '@/data/artworks';
import { ArtworkCard } from '@/components/ui/ArtworkCard';
import { ArtworkFilters } from '@/components/gallery/ArtworkFilters';
import { ArtworkLightbox } from '@/components/gallery/ArtworkLightbox';

export function ArtworkGrid() {
  const [activeCategory, setActiveCategory] = useState<'All' | ArtworkCategory>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'available'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredArtworks = useMemo(() => {
    return ARTWORKS.filter((artwork) => {
      const matchesCategory =
        activeCategory === 'All' || artwork.category === activeCategory;
      const matchesStatus =
        statusFilter === 'all' || artwork.status === 'Available';
      return matchesCategory && matchesStatus;
    });
  }, [activeCategory, statusFilter]);

  return (
    <div className="space-y-10">
      {/* Filters Toolbar */}
      <ArtworkFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        activeStatusFilter={statusFilter}
        onToggleStatusFilter={setStatusFilter}
        count={filteredArtworks.length}
      />

      {/* Grid of Artworks */}
      {filteredArtworks.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <ArtworkCard
                  artwork={artwork}
                  priority={index < 3}
                  onOpenLightbox={() => setLightboxIndex(index)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <div className="py-24 text-center space-y-4">
          <p className="font-serif text-2xl text-charcoal">
            No paintings match this current selection.
          </p>
          <p className="text-sm text-charcoal-muted font-light max-w-md mx-auto">
            Try choosing a different medium category or clearing the availability filter to view the complete catalog.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setStatusFilter('all');
            }}
            className="mt-4 px-6 py-2.5 rounded-full border border-charcoal/30 text-xs uppercase tracking-wider hover:bg-charcoal hover:text-canvas transition-colors font-medium"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Full-screen Lightbox Modal */}
      <ArtworkLightbox
        artworks={filteredArtworks}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
