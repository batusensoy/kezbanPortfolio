import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ARTIST } from '@/data/artist';
import { ArrowUpRight, Palette, Layers, Compass, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Artist & Artistic Philosophy',
  description: `Biography, philosophy, and creative process of contemporary fine artist ${ARTIST.name}. Studio practices in Istanbul & London.`,
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
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

        {/* Artistic Statement Pullquote */}
        <section className="py-16 sm:py-24 px-8 sm:px-16 rounded-3xl bg-[#F4EFEB] border border-[#E8E2D9] text-center max-w-5xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta font-medium mb-6 block">
            Artist&apos;s Statement
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal leading-snug italic max-w-3xl mx-auto">
            &ldquo;{ARTIST.artisticStatement}&rdquo;
          </blockquote>
          <div className="mt-8 text-xs uppercase tracking-widest text-charcoal-muted font-sans font-light">
            — {ARTIST.name}, Istanbul Studio
          </div>
        </section>

        {/* Philosophy & Creative Process */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Philosophy Pillars (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block mb-3">
                Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal">
                Core Conceptual Foundations
              </h2>
            </div>

            <div className="space-y-6">
              {ARTIST.philosophy.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-canvas-subtle border border-[#E8E2D9] space-y-2"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-terracotta">0{i + 1}</span>
                    <h3 className="font-serif text-lg font-medium text-charcoal">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-charcoal-muted leading-relaxed font-light pl-7">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Studio Process & Influences (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block mb-3">
                Methodology
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal">
                Studio Rituals & Influences
              </h2>
            </div>

            {/* Step-by-step process */}
            <div className="p-8 rounded-2xl bg-canvas-subtle border border-[#E8E2D9] space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal flex items-center space-x-2">
                <Layers className="w-4 h-4 text-terracotta" />
                <span>The Alchemy of the Studio</span>
              </h3>
              <ol className="space-y-4 text-sm text-charcoal-muted font-light">
                {ARTIST.process.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-terracotta font-serif font-medium text-base shrink-0 mt-0.5">
                      {idx + 1}.
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Influences */}
            <div className="p-8 rounded-2xl bg-canvas-subtle border border-[#E8E2D9] space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal flex items-center space-x-2">
                <Compass className="w-4 h-4 text-terracotta" />
                <span>Lineage & Dialogue</span>
              </h3>
              <ul className="space-y-2 text-xs text-charcoal-muted leading-relaxed font-light">
                {ARTIST.influences.map((inf, i) => (
                  <li key={i} className="border-b border-[#E3DDD5] pb-2 last:border-none">
                    {inf}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Selected Exhibition History */}
        <section className="space-y-10 pt-12 border-t border-[#E8E2D9]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block mb-2">
                Curatorial Record
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal">
                Selected Exhibitions & Fairs
              </h2>
            </div>
            <p className="text-xs text-charcoal-muted font-light">
              Museum & Gallery Archives 2023–2026
            </p>
          </div>

          <div className="divide-y divide-[#E8E2D9] border-y border-[#E8E2D9]">
            {ARTIST.exhibitions.map((ex, idx) => (
              <div
                key={idx}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-canvas-subtle/50 px-2 transition-colors"
              >
                <div className="md:col-span-2 font-mono text-sm text-terracotta">
                  {ex.year}
                </div>
                <div className="md:col-span-5 font-serif text-lg font-medium text-charcoal">
                  {ex.title}
                </div>
                <div className="md:col-span-3 text-sm text-charcoal-muted font-light">
                  {ex.venue}, {ex.city}
                </div>
                <div className="md:col-span-2 text-right">
                  <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-canvas-subtle border border-[#E8E2D9] text-charcoal-muted font-medium">
                    {ex.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="pt-8 pb-12 text-center space-y-6 border-t border-[#E8E2D9]">
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

