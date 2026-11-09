'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ARTIST } from '@/data/artist';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D9] shadow-gallery-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          {/* Brand / Artist Identity */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label={`${ARTIST.name} - Home`}
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.12em] font-medium text-charcoal group-hover:text-terracotta transition-colors uppercase">
              {ARTIST.name}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-charcoal-muted uppercase font-sans font-normal mt-0.5">
              Studio & Fine Art
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm tracking-[0.08em] uppercase transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-charcoal font-semibold'
                      : 'text-charcoal-muted hover:text-charcoal font-normal'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-terracotta"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full border border-charcoal/20 hover:border-charcoal hover:bg-charcoal hover:text-canvas transition-all duration-300 font-medium group"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal hover:text-terracotta transition-colors focus:outline-none"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Emil Kowalski-grade spring animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-canvas border-l border-[#E8E2D9] p-8 flex flex-col justify-between shadow-gallery-lg"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-8 border-b border-[#E8E2D9]">
                  <span className="font-serif text-lg tracking-[0.1em] font-medium text-charcoal uppercase">
                    {ARTIST.name}
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-charcoal-muted hover:text-charcoal"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col space-y-6 mt-8" aria-label="Mobile Navigation">
                  {NAV_ITEMS.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx, duration: 0.25 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between py-2 text-lg tracking-[0.08em] font-serif uppercase ${
                            isActive
                              ? 'text-terracotta font-semibold'
                              : 'text-charcoal hover:text-terracotta'
                          }`}
                        >
                          <span>{item.name}</span>
                          <span className="text-xs text-charcoal-muted font-sans font-light">
                            0{idx + 1}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Bottom Info */}
              <div className="pt-8 border-t border-[#E8E2D9] space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-charcoal text-canvas text-xs uppercase tracking-[0.15em] font-medium hover:bg-terracotta transition-colors"
                >
                  <span>Commission & Inquiries</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <div className="text-xs text-charcoal-muted flex justify-between pt-2">
                  <span>{ARTIST.location}</span>
                  <a
                    href={ARTIST.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-charcoal underline"
                  >
                    {ARTIST.contact.instagramHandle}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
