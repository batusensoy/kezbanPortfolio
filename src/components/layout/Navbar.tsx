'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'paintings', href: '/gallery' },
  { name: 'about', href: '/about' },
  { name: 'write to me', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="w-full pt-6 pb-4 sm:pt-10 sm:pb-6 relative z-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-baseline justify-between">
        {/* Handwritten signature logo from Screenshot 1 */}
        <Link
          href="/"
          className="group focus:outline-none"
          aria-label="Kezban Tanli — Home"
        >
          <span className="font-hand text-3xl sm:text-4xl text-charcoal tracking-wide hover:text-terracotta transition-colors select-none">
            Kezban
          </span>
        </Link>

        {/* Desktop Navigation Links (lowercase, airy, intimate) */}
        <nav className="hidden md:flex items-center space-x-9 text-base font-serif text-charcoal/80" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative hover:text-charcoal transition-colors ${
                  isActive ? 'text-charcoal font-medium italic underline underline-offset-4 decoration-terracotta/60' : ''
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal hover:text-terracotta transition-colors focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-canvas border-b border-charcoal/10 shadow-lg px-6 py-6"
          >
            <nav className="flex flex-col space-y-4 text-lg font-serif">
              <Link
                href="/"
                className="text-charcoal hover:text-terracotta py-1"
              >
                home
              </Link>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-terracotta py-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
