'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArtworkCard } from '@/components/ui/ArtworkCard';
import { getFeaturedArtworks, ARTWORKS } from '@/data/artworks';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function FeaturedArtwork() {
  const featured = getFeaturedArtworks();
  const { t } = useLanguage();

  return (
    <section id="featured" className="py-20 sm:py-28 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={t.home.featured.eyebrow}
          title={t.home.featured.title}
          description={t.home.featured.description}
          linkText={t.home.featured.viewAllLink}
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
            <span>{t.home.featured.exploreArchiveBtn(ARTWORKS.length)}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
