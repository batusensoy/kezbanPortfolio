import React from 'react';
import type { Metadata } from 'next';
import { ArtworkGrid } from '@/components/gallery/ArtworkGrid';

export const metadata: Metadata = {
  title: 'Paintings',
  description:
    'All paintings by Kezban Tanli — landscapes, still life, abstractions, and figurative work. Original oil paintings available for acquisition.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-24">
        {/* Page header — editorial catalogue feel */}
        <div className="mb-14 sm:mb-20 max-w-2xl">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-charcoal leading-[1.08] mb-5">
            All{' '}
            <em className="not-italic text-terracotta font-serif">paintings</em>
          </h1>
          <p className="text-base text-charcoal/55 leading-relaxed font-light">
            Everything made so far. Click any painting to see it properly.
          </p>
        </div>

        {/* Gallery Grid & Filters */}
        <ArtworkGrid />
      </div>
    </div>
  );
}
