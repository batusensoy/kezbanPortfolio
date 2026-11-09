'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { ARTIST } from '@/data/artist';
import { ARTWORKS } from '@/data/artworks';

export function Hero() {
  const heroArtwork = ARTWORKS[0]; // 'Solitude in Ochre No. 4'

  return (
    <section className="relative w-full pt-8 pb-20 sm:pt-12 sm:pb-28 overflow-hidden bg-linen-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Identity, Statement & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-terracotta" />
              <span className="text-xs uppercase tracking-[0.25em] text-charcoal-muted font-medium">
                {ARTIST.title}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal text-charcoal tracking-tight leading-[1.08]">
              Tactile silence & geological memory on Belgian linen.
            </h1>

            {/* Artistic Statement preview */}
            <p className="text-base sm:text-lg text-charcoal-muted font-light max-w-xl leading-relaxed">
              {ARTIST.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-charcoal text-canvas hover:bg-terracotta text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-gallery-sm hover:shadow-gallery-md group"
              >
                <span>Explore Artwork</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-charcoal/30 hover:border-charcoal hover:bg-canvas-subtle text-charcoal text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300"
              >
                <span>Commission & Enquiries</span>
              </Link>
            </div>

            {/* Metadata tags */}
            <div className="pt-8 border-t border-[#E8E2D9] grid grid-cols-3 gap-4 text-xs text-charcoal-muted font-light">
              <div>
                <span className="block font-medium text-charcoal uppercase tracking-wider text-[11px]">
                  Studio
                </span>
                <span className="mt-1 block">{ARTIST.location}</span>
              </div>
              <div>
                <span className="block font-medium text-charcoal uppercase tracking-wider text-[11px]">
                  Mediums
                </span>
                <span className="mt-1 block">Oil, wax & earth pigments</span>
              </div>
              <div>
                <span className="block font-medium text-charcoal uppercase tracking-wider text-[11px]">
                  Availability
                </span>
                <span className="mt-1 block">Originals & commissions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Artwork Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Museum frame presentation */}
            <div className="relative p-3 sm:p-4 bg-canvas-elevated rounded-xl border border-[#E3DDD5] shadow-frame">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#EDE6DF]">
                <Image
                  src={heroArtwork.image}
                  alt={heroArtwork.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
                />
              </div>

              {/* Artwork caption badge */}
              <div className="mt-4 pt-3 border-t border-[#EDE6DF] flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-medium text-charcoal">
                    {heroArtwork.title}
                  </h3>
                  <p className="text-[11px] text-charcoal-muted font-light">
                    {heroArtwork.medium}
                  </p>
                </div>
                <Link
                  href={`/gallery/${heroArtwork.slug}`}
                  className="text-xs uppercase tracking-wider text-terracotta hover:underline font-medium inline-flex items-center space-x-1"
                >
                  <span>View</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle scroll guide */}
        <div className="mt-16 sm:mt-24 flex items-center justify-center">
          <a
            href="#featured"
            className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-charcoal-muted hover:text-charcoal transition-colors group"
            aria-label="Scroll down to featured paintings"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-terracotta" />
          </a>
        </div>
      </div>
    </section>
  );
}

