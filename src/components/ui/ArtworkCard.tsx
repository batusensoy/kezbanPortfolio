'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Artwork, getLocalizedArtwork } from '@/data/artworks';
import { useLanguage } from '@/i18n/LanguageContext';

interface ArtworkCardProps {
  artwork: Artwork;
  priority?: boolean;
  onOpenLightbox?: () => void;
}

export function ArtworkCard({ artwork: rawArtwork, priority = false, onOpenLightbox }: ArtworkCardProps) {
  const { locale, t } = useLanguage();
  const artwork = getLocalizedArtwork(rawArtwork, locale);

  const getStatusBadge = (status: Artwork['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-canvas/95 backdrop-blur-sm text-charcoal border border-[#E8E2D9] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
            <span>{t.gallery.status.Available}</span>
          </span>
        );
      case 'Sold':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-charcoal/85 backdrop-blur-sm text-canvas shadow-sm">
            {t.gallery.status.Sold}
          </span>
        );
      case 'Reserved':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-ochre/20 backdrop-blur-sm text-charcoal border border-ochre/40 shadow-sm">
            {t.gallery.status.Reserved}
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
        className="block relative overflow-hidden rounded-xl bg-[#F4EFEB] border border-[#E8E2D9] shadow-gallery-sm group-hover:shadow-gallery-md transition-all duration-500"
        aria-label={artwork.title}
      >
        {/* Uniform archival museum mat container so portrait, landscape, and square artworks coexist harmoniously without cropping */}
        <div className="relative w-full aspect-[4/5] p-4 sm:p-6 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
              className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] drop-shadow-sm"
            />
          </div>

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
                className="w-9 h-9 rounded-full bg-canvas/95 backdrop-blur-sm text-charcoal hover:bg-charcoal hover:text-canvas border border-[#E8E2D9] flex items-center justify-center transition-colors shadow-sm"
                aria-label={t.gallery.lightbox.expandAria(artwork.title)}
                title={t.gallery.lightbox.expandTitle}
              >
                <span className="text-xs font-serif font-bold">⛶</span>
              </button>
            )}

            <div className="w-9 h-9 rounded-full bg-canvas/95 backdrop-blur-sm text-charcoal border border-[#E8E2D9] flex items-center justify-center shadow-sm">
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
