'use client';

import React, { useState } from 'react';
import { ARTWORKS } from '@/data/artworks';
import { ArtworkCard } from '@/components/ui/ArtworkCard';
import { ArtworkLightbox } from '@/components/gallery/ArtworkLightbox';

export function ArtworkGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Grid of Artworks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        {ARTWORKS.map((artwork, index) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            priority={index < 3}
            onOpenLightbox={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      {/* Full-screen Lightbox Modal */}
      <ArtworkLightbox
        artworks={ARTWORKS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
