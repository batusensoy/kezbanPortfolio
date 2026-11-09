import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ARTIST } from '@/data/artist';

export function ArtistGreeting() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Painting taped to the wall with masking tape (Screenshot 3) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-80 aspect-[3/4] bg-[#E8E0D5] shadow-canvas-subtle p-0.5">
              {/* Masking tape on top-left corner */}
              <div
                className="masking-tape -top-2 left-6 rotate-[-5deg]"
                aria-hidden="true"
              />

              {/* Masking tape on top-right corner */}
              <div
                className="masking-tape -top-2 right-6 rotate-[4deg]"
                aria-hidden="true"
              />

              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                  alt={`${ARTIST.name} portrait`}
                  fill
                  sizes="(max-width: 640px) 260px, 320px"
                  className="object-cover object-center filter sepia-[0.15] contrast-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Intimate Narrative & Handwritten Signature (Screenshot 3) */}
          <div className="lg:col-span-7 space-y-6 max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal italic tracking-tight">
              Hello, and thank you for looking.
            </h2>

            <div className="space-y-4 font-serif text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal">
              <p>
                I started painting at the kitchen table and I still work in a small room with a window that faces north.
              </p>
              <p className="text-charcoal/70 text-sm sm:text-base">
                I spend my days mixing natural walnut oils, grinding earth pigments, and stretching linen until it rings like a drum.
              </p>
              <p>
                I try to paint what a quiet afternoon feels like, and then get out of the way.
              </p>
            </div>

            {/* Handwritten Signature from Screenshot 3 */}
            <div className="pt-2">
              <span className="font-hand text-4xl sm:text-5xl text-charcoal tracking-wide select-none">
                Kezban
              </span>
            </div>

            {/* Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="font-serif text-sm sm:text-base text-charcoal/80 hover:text-charcoal italic underline underline-offset-4 decoration-charcoal/40 hover:decoration-terracotta transition-colors"
              >
                more about me and how I work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

