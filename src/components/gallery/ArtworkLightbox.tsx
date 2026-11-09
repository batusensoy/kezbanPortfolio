'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { Artwork } from '@/data/artworks';

interface ArtworkLightboxProps {
  artworks: Artwork[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ArtworkLightbox({
  artworks,
  currentIndex,
  onClose,
  onNavigate,
}: ArtworkLightboxProps) {
  const isOpen = currentIndex !== null && artworks[currentIndex] !== undefined;
  const currentArtwork = isOpen ? artworks[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex !== null) {
        onNavigate((currentIndex + 1) % artworks.length);
      }
      if (e.key === 'ArrowLeft' && currentIndex !== null) {
        onNavigate((currentIndex - 1 + artworks.length) % artworks.length);
      }
    },
    [isOpen, currentIndex, artworks.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && currentArtwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-md p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Top Bar with counter & close button */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between text-canvas z-10">
            <div className="text-xs tracking-[0.2em] uppercase font-sans text-canvas/70">
              <span>{currentIndex! + 1}</span>
              <span className="mx-2">/</span>
              <span>{artworks.length}</span>
              <span className="ml-4 hidden sm:inline text-canvas/50">
                Use arrow keys to navigate • Esc to exit
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-canvas/10 hover:bg-canvas/20 text-canvas transition-colors focus:outline-none"
              aria-label="Close full-screen lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex! - 1 + artworks.length) % artworks.length);
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-canvas/10 hover:bg-canvas/25 text-canvas transition-colors z-10"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex! + 1) % artworks.length);
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-canvas/10 hover:bg-canvas/25 text-canvas transition-colors z-10"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Artwork Modal Container */}
          <motion.div
            key={currentArtwork.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col md:flex-row bg-[#1C1B1A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-canvas"
          >
            {/* Left: Image Canvas */}
            <div className="relative flex-1 min-h-[300px] md:min-h-[500px] bg-black/40 flex items-center justify-center p-4">
              <div className="relative w-full h-full min-h-[320px] md:min-h-[460px]">
                <Image
                  src={currentArtwork.image}
                  alt={currentArtwork.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Curatorial details sidebar inside lightbox */}
            <div className="w-full md:w-80 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#141312]">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49746] font-medium block">
                  {currentArtwork.category}
                </span>

                <h3 className="font-serif text-2xl font-normal text-white">
                  {currentArtwork.title}
                </h3>

                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {currentArtwork.medium}
                </p>

                <div className="text-xs text-white/50 space-y-1 font-sans pt-2 border-t border-white/10">
                  <p>{currentArtwork.dimensions}</p>
                  <p>Year: {currentArtwork.year}</p>
                  <p className="text-[#C49746] font-medium pt-1">
                    Status: {currentArtwork.status === 'Sold' ? 'Private Collection' : currentArtwork.status}
                  </p>
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed line-clamp-4 pt-2">
                  {currentArtwork.description}
                </p>
              </div>

              {/* Action buttons inside lightbox */}
              <div className="pt-6 space-y-2 border-t border-white/10">
                <Link
                  href={`/gallery/${currentArtwork.slug}`}
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-white text-charcoal hover:bg-[#C49746] hover:text-black text-xs uppercase tracking-wider font-medium transition-colors"
                >
                  <span>View Full Details Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/contact?artwork=${encodeURIComponent(currentArtwork.title)}`}
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors"
                >
                  <span>Direct Acquisition Inquiry</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

