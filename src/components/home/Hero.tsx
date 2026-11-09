'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full pt-8 pb-20 sm:pt-14 sm:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Poetic Statement & Invitation (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pr-0 lg:pr-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal text-charcoal leading-[1.18] tracking-tight">
              I paint fields,<br />
              fruit on a table,<br />
              and the colours that sit<br />
              between them.
            </h1>

            <div className="space-y-4 max-w-lg">
              <p className="font-serif text-lg sm:text-xl text-charcoal/80 font-normal leading-relaxed">
                Take your time. If something stays with you,{' '}
                <Link
                  href="/contact"
                  className="italic underline underline-offset-4 decoration-terracotta/50 hover:text-terracotta transition-colors"
                >
                  write to me
                </Link>{' '}
                and we can talk about it.
              </p>
            </div>
          </div>

          {/* Right Column: Physical Canvases with Handwritten Marginalia (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center py-6 sm:py-10">
            {/* Handwritten studio note with curved arrow (from Screenshot 1) */}
            <div className="absolute -top-6 left-0 sm:-left-6 z-20 hidden sm:flex flex-col items-center">
              <span className="font-hand text-xl text-charcoal-muted leading-tight rotate-[-4deg] max-w-[150px] text-center">
                finished in March.<br />
                the studio still<br />
                smells of linseed
              </span>
              {/* Organic hand-drawn curved arrow pointing to canvas */}
              <svg
                className="w-12 h-12 text-charcoal/60 mt-1 rotate-12"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 12 10 Q 25 35 42 38" />
                <path d="M 34 32 L 42 38 L 36 44" />
              </svg>
            </div>

            {/* Main Canvas (Leaning with physical depth & shadow) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 sm:w-80 aspect-[4/5] bg-[#E8DDD0] shadow-canvas-float rounded-[3px] overflow-hidden border border-charcoal/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=85"
                alt="Color field painting — warm ochre, indigo, and terracotta"
                fill
                priority
                sizes="(max-width: 640px) 260px, 320px"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Overlapping Small Canvas (Tilted slightly in front, from Screenshot 1) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-2 sm:-left-8 w-36 sm:w-44 aspect-square bg-[#E8E2D8] shadow-canvas-float rounded-[2px] overflow-hidden border border-charcoal/15 rotate-[-3deg] z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=85"
                alt="Small linen study"
                fill
                sizes="180px"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
