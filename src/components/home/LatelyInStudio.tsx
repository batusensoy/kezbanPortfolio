'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function LatelyInStudio() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Section Heading from Screenshot 2 */}
        <div className="mb-14 sm:mb-18">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-charcoal font-normal tracking-tight">
            Lately in the{' '}
            <span className="italic hand-underline font-normal">studio</span>
          </h2>
        </div>

        {/* Asymmetric Studio Arrangement from Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-14 items-start">
          {/* Left: Landscape Canvas (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <Link
              href="/gallery/transient-light-at-dawn"
              className="block group"
            >
              <div className="relative aspect-[16/10] w-full bg-[#E5DFD4] shadow-canvas-float rounded-[3px] overflow-hidden border border-charcoal/10 transition-transform duration-500 group-hover:scale-[1.01]">
                <Image
                  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85"
                  alt="Field Before Rain — Oil on canvas"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-center"
                />
              </div>
            </Link>

            {/* Caption & Handwritten Note */}
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl text-charcoal font-normal">
                Field Before Rain
              </h3>
              <p className="font-serif text-sm text-charcoal/60 italic">
                Oil on canvas, 2025
              </p>
              <p className="font-hand text-lg sm:text-xl text-charcoal/70 pt-0.5">
                painted from memory
              </p>
            </div>
          </div>

          {/* Right: Still Life Canvas (5 cols, offset downward) */}
          <div className="md:col-span-5 space-y-4 md:pt-14">
            <Link
              href="/gallery/botanical-whisper"
              className="block group"
            >
              <div className="relative aspect-[4/5] w-full bg-[#E5DFD4] shadow-canvas-float rounded-[3px] overflow-hidden border border-charcoal/10 transition-transform duration-500 group-hover:scale-[1.01]">
                <Image
                  src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1000&q=85"
                  alt="Three Pears and Jug on Wood"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </Link>

            {/* Caption & Handwritten Note */}
            <div className="space-y-1">
              <h3 className="font-serif text-lg sm:text-xl text-charcoal font-normal">
                Three Pears on a Morning Table
              </h3>
              <p className="font-serif text-sm text-charcoal/60 italic">
                Oil on linen, 2025
              </p>
              <p className="font-hand text-lg sm:text-xl text-charcoal/70 pt-0.5">
                picked from the orchard before frost
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

