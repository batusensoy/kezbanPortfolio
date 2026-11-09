import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArtworkCard } from '@/components/ui/ArtworkCard';
import { getFeaturedArtworks, ARTWORKS } from '@/data/artworks';
import { ArrowUpRight } from 'lucide-react';

export function FeaturedArtwork() {
  const featured = getFeaturedArtworks();

  return (
    <section id="featured" className="py-20 sm:py-28 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Selected Works"
          title="Curated Paintings & Studies"
          description="A selection of recent canvases investigating mineral textures, Mediterranean earth tones, and contemplative negative space."
          linkText="View All Artworks"
          linkHref="/gallery"
        />

        {/* Editorial Grid: Asymmetric rhythm for art gallery aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {featured.map((artwork, index) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              priority={index < 3}
            />
          ))}
        </div>

        {/* Bottom Gallery Link Button */}
        <div className="mt-16 sm:mt-20 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full border border-charcoal/20 hover:border-charcoal hover:bg-charcoal hover:text-canvas text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 group"
          >
            <span>Explore All {ARTWORKS.length} Artworks in the Archive</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

