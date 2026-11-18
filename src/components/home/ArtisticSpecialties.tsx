'use client';

import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getArtist } from '@/data/artist';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function ArtisticSpecialties() {
  const { locale, t } = useLanguage();
  const artist = getArtist(locale);

  return (
    <section className="py-20 sm:py-28 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={t.home.specialties.eyebrow}
          title={t.home.specialties.title}
          description={t.home.specialties.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {artist.specialties.map((specialty, idx) => (
            <div
              key={specialty.title}
              className="p-8 sm:p-10 rounded-2xl bg-canvas-subtle border border-[#E8E2D9] hover:border-charcoal/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-terracotta tracking-widest block">
                  0{idx + 1}
                </span>

                <h3 className="font-serif text-2xl font-normal text-charcoal group-hover:text-terracotta transition-colors">
                  {specialty.title}
                </h3>

                <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                  {specialty.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E3DDD5] flex items-center justify-between text-xs text-charcoal-muted">
                <span className="italic">{specialty.mediums}</span>
                <Link
                  href="/contact"
                  className="font-medium uppercase tracking-wider text-charcoal group-hover:text-terracotta inline-flex items-center space-x-1"
                >
                  <span>{t.home.specialties.inquireLink}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
