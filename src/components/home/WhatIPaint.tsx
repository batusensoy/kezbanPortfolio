import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DISCIPLINES = [
  {
    handNote: 'colour first',
    title: 'Abstract',
    titleColor: 'text-charcoal',
    description: 'Large soft shapes, built up in thin layers until the weight of the colour feels settled.',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=85',
    categoryQuery: 'Abstract Expressionism',
  },
  {
    handNote: 'places I remember',
    title: 'Landscape',
    titleColor: 'text-terracotta',
    description: 'Quiet hills, sea mist, and early morning light across open fields.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=85',
    categoryQuery: 'Atmospheric Landscapes',
  },
  {
    handNote: 'things on the table',
    title: 'Still Life',
    titleColor: 'text-charcoal',
    description: 'Pears, a jug, three lemons. Ordinary things sitting quietly in afternoon light.',
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=800&q=85',
    categoryQuery: 'Oil on Canvas',
  },
];

export function WhatIPaint() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Section Heading from Screenshot 4 */}
        <div className="mb-14 sm:mb-18">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-charcoal font-normal tracking-tight">
            What I paint
          </h2>
        </div>

        {/* 3 Columns with Deckled / Torn Paper Canvases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14">
          {DISCIPLINES.map((item) => (
            <div key={item.title} className="flex flex-col space-y-4">
              {/* Handwritten note above canvas */}
              <span className="font-hand text-xl text-charcoal/70 block h-7">
                {item.handNote}
              </span>

              {/* Torn / Deckled Paper Canvas Container */}
              <Link
                href={`/gallery?category=${encodeURIComponent(item.categoryQuery)}`}
                className="block group"
              >
                <div className="relative aspect-[4/5] w-full bg-[#E5DDD2] shadow-canvas-subtle transition-transform duration-500 group-hover:scale-[1.015]">
                  <div className="deckled-paper relative w-full h-full overflow-hidden bg-[#E2D9CC]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </Link>

              {/* Text Description below */}
              <div className="space-y-1 pt-2">
                <Link
                  href={`/gallery?category=${encodeURIComponent(item.categoryQuery)}`}
                  className={`font-serif text-xl ${item.titleColor} font-normal hover:underline inline-block`}
                >
                  {item.title}
                </Link>
                <p className="font-serif text-sm text-charcoal/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

