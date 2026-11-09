import React from 'react';
import type { Metadata } from 'next';
import { ArtworkGrid } from '@/components/gallery/ArtworkGrid';
import { ARTIST } from '@/data/artist';
import { ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Art Gallery & Archive',
  description:
    'Browse original paintings, textural abstractions, and atmospheric studies by Kezban Arslan. Available for acquisition and international shipping.',
};

export default function GalleryPage() {
  return (
    <div className="py-12 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Gallery Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
            Original Artworks
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal tracking-tight leading-[1.12]">
            Exhibition Catalog & Archive
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            Every piece is built upon hand-stretched Belgian linen or heavyweight deckled paper using natural mineral pigments, raw walnut oil, and cold wax formulas.
          </p>
        </div>

        {/* Gallery Grid & Filter Component */}
        <ArtworkGrid />

        {/* Collector Assurance & Shipping Details */}
        <div className="mt-20 pt-16 border-t border-[#E8E2D9] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-canvas-subtle border border-[#E8E2D9] space-y-3">
            <ShieldCheck className="w-6 h-6 text-terracotta" />
            <h4 className="font-serif text-lg font-medium text-charcoal">
              Certificate of Authenticity
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              Each original artwork includes a signed and wax-sealed Certificate of Authenticity cataloged in the artist&apos;s studio archive.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-canvas-subtle border border-[#E8E2D9] space-y-3">
            <Truck className="w-6 h-6 text-terracotta" />
            <h4 className="font-serif text-lg font-medium text-charcoal">
              Worldwide Insured Shipping
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              Paintings are crated in bespoke museum-grade wooden containers with full transit insurance across Europe, North America, and Asia.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-canvas-subtle border border-[#E8E2D9] space-y-3">
            <Sparkles className="w-6 h-6 text-terracotta" />
            <h4 className="font-serif text-lg font-medium text-charcoal">
              Custom Commissions
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed font-light">
              Collaborate directly with {ARTIST.name} on scale, palette harmony, and architectural placement for private residences and collections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

