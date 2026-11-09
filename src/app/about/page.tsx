import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ARTIST } from '@/data/artist';

export const metadata: Metadata = {
  title: 'About',
  description: `About Kezban Tanli — painter, her process, and what she thinks about while she works.`,
};

export default function AboutPage() {
  return (
    <div className="bg-canvas min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-28 space-y-28 sm:space-y-36">

        {/* — Portrait & greeting — */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Portrait taped to wall */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            {/* masking tape strips */}
            <div className="masking-tape absolute -top-3 left-[20%] w-20 h-5 rotate-[-2deg] z-10" />
            <div className="masking-tape absolute -top-3 right-[18%] w-16 h-5 rotate-[3deg] z-10" />
            <div className="masking-tape absolute -bottom-3 left-[12%] w-18 h-5 rotate-[1deg] z-10" />

            <div className="relative overflow-hidden bg-[#EDE6DF]" style={{ aspectRatio: '3/4' }}>
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
                alt={`${ARTIST.name}, painter`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-center filter saturate-[0.85] contrast-[1.03]"
              />
            </div>
            {/* small handwritten caption */}
            <p className="font-hand text-sm text-charcoal/50 mt-3 pl-1">
              in the studio, {ARTIST.location.split(',')[0]}
            </p>
          </div>

          {/* Bio text */}
          <div className="space-y-8 pt-4 lg:pt-10">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-normal text-charcoal leading-[1.1]">
              Hello, and thank you<br />for looking.
            </h1>

            <div className="space-y-5 text-base sm:text-lg text-charcoal/65 leading-relaxed font-light">
              <p>{ARTIST.shortBio}</p>
              <p>
                I work in a small room with a window that faces north. The light is
                steady and honest, which is what I need. I try to paint what a quiet
                afternoon feels like, and then get out of the way.
              </p>
              <p>
                Most paintings start as something I saw and couldn&apos;t stop thinking
                about — a field, a table, the way colour sits between two things that
                don&apos;t quite touch. I&apos;m interested in the almost, the nearly, the
                colour that doesn&apos;t have a name yet.
              </p>
            </div>

            {/* Handwritten signature */}
            <div className="pt-2">
              <p className="font-hand text-3xl text-charcoal/80">Kezban</p>
              <Link
                href="/contact"
                className="mt-4 inline-block text-sm text-charcoal/50 border-b border-charcoal/20 hover:text-charcoal hover:border-charcoal/50 transition-colors pb-0.5"
              >
                write to me
              </Link>
            </div>
          </div>
        </section>

        {/* — Artist's statement — */}
        <section className="max-w-3xl">
          <p className="font-hand text-xl text-terracotta mb-6">on painting</p>
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal leading-[1.3] italic">
            &ldquo;{ARTIST.artisticStatement}&rdquo;
          </blockquote>
        </section>

        {/* — How I work — */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-6">
            <p className="font-hand text-xl text-terracotta">how I work</p>
            <div className="space-y-5 text-base text-charcoal/65 leading-relaxed font-light">
              {ARTIST.process.map((step, i) => (
                <p key={i}>{step}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-hand text-xl text-terracotta">what I look at</p>
            <div className="space-y-3">
              {ARTIST.influences.map((inf, i) => (
                <p
                  key={i}
                  className="text-base text-charcoal/65 font-light border-b border-charcoal/8 pb-3 last:border-none last:pb-0"
                >
                  {inf}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* — What I'm drawn to — */}
        <section className="space-y-8">
          <p className="font-hand text-xl text-terracotta">things I keep coming back to</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {ARTIST.philosophy.map((pillar) => (
              <div key={pillar.title} className="space-y-3">
                <h3 className="font-serif text-xl font-normal text-charcoal">
                  {pillar.title}
                </h3>
                <p className="text-sm text-charcoal/55 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* — Exhibition list — scrapbook style — */}
        <section className="space-y-8">
          <p className="font-hand text-xl text-terracotta">shown at</p>
          <div className="space-y-0 divide-y divide-charcoal/8">
            {ARTIST.exhibitions.map((ex, idx) => (
              <div
                key={idx}
                className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8"
              >
                <span className="font-hand text-base text-terracotta/70 shrink-0 w-12">
                  {ex.year}
                </span>
                <span className="font-serif text-lg text-charcoal font-normal flex-1">
                  {ex.title}
                </span>
                <span className="text-sm text-charcoal/45 font-light shrink-0">
                  {ex.venue}, {ex.city}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* — Closing CTA — */}
        <section className="text-center space-y-5 pt-4">
          <p className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
            If you&apos;d like to know more, or see a painting in person —
          </p>
          <Link
            href="/contact"
            className="inline-block font-serif text-xl text-terracotta border-b-2 border-terracotta/30 hover:border-terracotta transition-colors pb-0.5"
          >
            just write to me.
          </Link>
        </section>

      </div>
    </div>
  );
}
