'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getArtist } from '@/data/artist';
import { ARTWORKS, getLocalizedArtwork } from '@/data/artworks';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const artist = getArtist(locale);
  const featuredPainting = getLocalizedArtwork(ARTWORKS[1], locale);

  return (
    <div className="py-12 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Hero Editorial Profile Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Artwork in Museum Mat (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-3 sm:p-4 bg-canvas-elevated rounded-2xl border border-[#E3DDD5] shadow-frame">
              <div className="relative w-full overflow-hidden rounded-xl bg-[#F4EFEB] p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src={featuredPainting.image}
                  alt={featuredPainting.title}
                  width={featuredPainting.width}
                  height={featuredPainting.height}
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="w-full h-auto max-h-[560px] object-contain rounded-lg drop-shadow-sm"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-[#EDE6DF] flex items-center justify-between text-xs text-charcoal-muted font-light px-1">
                <span>{artist.name}</span>
                <span>{artist.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
              {t.about.eyebrow}
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12]">
              {t.about.title}
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
              <p>{artist.shortBio}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <Link
                href="/gallery"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] px-6 py-3.5 rounded-full bg-charcoal text-canvas hover:bg-terracotta transition-colors font-medium group"
              >
                <span>{t.about.viewPaintingsBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.16em] text-charcoal hover:text-terracotta underline font-medium"
              >
                {t.about.inquireVisitsLink}
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pt-12 sm:pt-16 pb-8 text-center space-y-6 border-t border-[#E8E2D9]">
          <h3 className="font-serif text-3xl font-normal text-charcoal">
            {t.about.ctaTitle}
          </h3>
          <p className="text-sm text-charcoal-muted font-light max-w-lg mx-auto">
            {artist.contact.studioVisitNote}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-charcoal text-canvas hover:bg-terracotta text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <span>{t.about.ctaBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
