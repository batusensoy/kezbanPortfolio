'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Artwork } from '@/data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  priority?: boolean;
  onOpenLightbox?: () => void;
}

export function ArtworkCard({ artwork, priority = false, onOpenLightbox }: ArtworkCardProps) {
  const getStatusBadge = (status: Artwork['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-canvas/90 backdrop-blur-sm text-charcoal border border-[#E8E2D9]">
            <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
            <span>Available</span>
          </span>
        );
      case 'Sold':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-charcoal/80 backdrop-blur-sm text-canvas">
            Private Collection
          </span>
        );
      case 'Reserved':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-ochre/20 backdrop-blur-sm text-charcoal border border-ochre/40">
            Reserved
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
    >
      <Link
        href={`/gallery/${artwork.slug}`}
        className="block relative overflow-hidden rounded-lg bg-[#EFE9E2] border border-[#E8E2D9] shadow-gallery-sm group-hover:shadow-gallery-md transition-all duration-500"
        aria-label={`View details for ${artwork.title}`}
      >
        {/* Aspect ratio container based on orientation */}
        <div
          className={`relative w-full ${
            artwork.orientation === 'landscape'
              ? 'aspect-[4/3]'
              : artwork.orientation === 'square'
              ? 'aspect-square'
              : 'aspect-[3/4]'
          }`}
        >
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Subtle canvas frame highlight overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Status badge in top right */}
          <div className="absolute top-3.5 right-3.5 z-10">
            {getStatusBadge(artwork.status)}
          </div>

          {/* Quick view indicator in bottom right */}
          <div className="absolute bottom-3.5 right-3.5 z-10 flex items-center space-x-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {onOpenLightbox && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onOpenLightbox();
                }}
                className="w-9 h-9 rounded-full bg-canvas/90 backdrop-blur-sm text-charcoal hover:bg-charcoal hover:text-canvas flex items-center justify-center transition-colors shadow-sm"
                aria-label={`Expand and view high-resolution image of ${artwork.title}`}
                title="View High-Resolution Lightbox"
              >
                <span className="text-xs font-serif font-bold">⛶</span>
              </button>
            )}

            <div className="w-9 h-9 rounded-full bg-canvas/90 backdrop-blur-sm text-charcoal flex items-center justify-center shadow-sm">
              <ArrowUpRight className="w-4 h-4 text-charcoal" />
            </div>
          </div>
        </div>
      </Link>

      {/* Metadata caption */}
      <div className="pt-4 flex flex-col space-y-1">
        <div className="flex items-baseline justify-between">
          <Link
            href={`/gallery/${artwork.slug}`}
            className="font-serif text-lg sm:text-xl font-medium text-charcoal group-hover:text-terracotta transition-colors line-clamp-1"
          >
            {artwork.title}
          </Link>
          <span className="text-xs text-charcoal-muted font-sans font-light ml-2 shrink-0">
            {artwork.year}
          </span>
        </div>

        <p className="text-xs text-charcoal-muted line-clamp-1 font-light">
          {artwork.medium}
        </p>

        <p className="text-[11px] text-charcoal-muted/80 tracking-wide font-sans">
          {artwork.dimensions}
        </p>
      </div>
    </motion.article>
  );
}

