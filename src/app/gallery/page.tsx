'use client';

import React from 'react';
import { ArtworkGrid } from '@/components/gallery/ArtworkGrid';
import { getArtist } from '@/data/artist';
import { ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function GalleryPage() {
  const { locale, t } = useLanguage();
  const artist = getArtist(locale);

  return (
    <div className="py-12 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Gallery Page Header */}
        <div className="max-w-3xl space-y-4 pb-8 border-b border-[#E8E2D9]">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
            {t.gallery.eyebrow}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal tracking-tight leading-[1.12]">
            {t.gallery.title}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            {t.gallery.description}
          </p>
        </div>

        {/* Gallery Artwork Grid */}
        <ArtworkGrid />

        {/* Collector Assurance & Shipping Details */}
        <div className="mt-20 pt-16 border-t border-[#E8E2D9] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-canvas-subtle border border-[#E8E2D9] space-y-3">
            <ShieldCheck className="w-6 h-6 text-terracotta" />
            <h4 className="font-serif text-lg font-medium text-charcoal">
              {t.gallery.assurance1Title}
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              {t.gallery.assurance1Desc}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-canvas-subtle border border-[#E8E2D9] space-y-3">
            <Truck className="w-6 h-6 text-terracotta" />
            <h4 className="font-serif text-lg font-medium text-charcoal">
              {t.gallery.assurance2Title}
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              {t.gallery.assurance2Desc}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-canvas-subtle border border-[#E8E2D9] space-y-3">
            <Sparkles className="w-6 h-6 text-terracotta" />
            <h4 className="font-serif text-lg font-medium text-charcoal">
              {t.gallery.assurance3Title}
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              {t.gallery.assurance3Desc(artist.name)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
