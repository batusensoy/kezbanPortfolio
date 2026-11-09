import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Palette, Layers, Sparkles } from 'lucide-react';
import { ARTIST } from '@/data/artist';

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4EFEB] border-y border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Portrait / Studio Atmosphere (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative p-3 sm:p-4 bg-canvas rounded-2xl border border-[#E3DDD5] shadow-gallery-md">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#EDE6DF]">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt={`${ARTIST.name} in studio`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Caption pill */}
              <div className="mt-4 flex items-center justify-between text-xs text-charcoal-muted font-light px-1">
                <span>{ARTIST.name} — Studio Istanbul</span>
                <span className="italic font-serif">Belgian Linen Series</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Artistic Philosophy (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium">
              About the Artist
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15]">
              Painting as an intimate dialogue with matter, light, and silence.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
              {ARTIST.artisticStatement}
            </p>

            {/* Core Pillars highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#E3DDD5]">
              <div className="space-y-2">
                <Palette className="w-5 h-5 text-terracotta" />
                <h4 className="font-serif text-base font-medium text-charcoal">
                  Mineral Pigments
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  Hand-ground earth ochres, marble dust, and cold wax formulas.
                </p>
              </div>

              <div className="space-y-2">
                <Layers className="w-5 h-5 text-terracotta" />
                <h4 className="font-serif text-base font-medium text-charcoal">
                  Belgian Linen
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  Heavyweight hand-stretched linen offering rich tactile resonance.
                </p>
              </div>

              <div className="space-y-2">
                <Sparkles className="w-5 h-5 text-terracotta" />
                <h4 className="font-serif text-base font-medium text-charcoal">
                  Site-Specific Work
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                  Custom commissions harmonized with architectural interior light.
                </p>
              </div>
            </div>

            {/* Read full biography link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] text-charcoal font-medium pb-1.5 border-b-2 border-charcoal hover:border-terracotta hover:text-terracotta transition-colors group"
              >
                <span>Read Full Biography & Process</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

