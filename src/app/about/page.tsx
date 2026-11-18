import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ARTIST } from '@/data/artist';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Artist',
  description: `Biography and studio practice of contemporary fine artist ${ARTIST.name} in Istanbul & London.`,
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Hero Editorial Profile Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait in Museum Mat (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-3 sm:p-4 bg-canvas-elevated rounded-2xl border border-[#E3DDD5] shadow-frame">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#EDE6DF]">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                  alt={`${ARTIST.name} portrait`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center filter grayscale contrast-[1.05]"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-[#EDE6DF] flex items-center justify-between text-xs text-charcoal-muted font-light px-1">
                <span>{ARTIST.name}</span>
                <span>{ARTIST.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
              Biography & Artistic Identity
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.12]">
              Giving weight and breath to the unspoken memory of matter.
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
              <p>{ARTIST.shortBio}</p>
              <p>
                Working across studios in Istanbul and London, her practice bridges the ancient mineral traditions of Anatolia and the Mediterranean with contemporary European abstract matterism. She grinds raw limestone, ochres, and lapis lazuli by hand, mixing them with cold beeswax and slow-curing walnut oils.
              </p>
              <p>
                Her large canvases do not invite hurried observation; they demand quiet stillness, revealing nuanced shifts in luminescence and raking shadow as natural daylight changes across the day.
              </p>
            </div>

            <div className="pt-4 flex items-center space-x-6">
              <Link
                href="/gallery"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] px-6 py-3.5 rounded-full bg-charcoal text-canvas hover:bg-terracotta transition-colors font-medium group"
              >
                <span>View Current Paintings</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.16em] text-charcoal hover:text-terracotta underline font-medium"
              >
                Inquire for Studio Visits
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pt-12 sm:pt-16 pb-8 text-center space-y-6 border-t border-[#E8E2D9]">
          <h3 className="font-serif text-3xl font-normal text-charcoal">
            Interested in Studio Visits or Acquisitions?
          </h3>
          <p className="text-sm text-charcoal-muted font-light max-w-lg mx-auto">
            {ARTIST.contact.studioVisitNote}
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-charcoal text-canvas hover:bg-terracotta text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <span>Connect with the Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
