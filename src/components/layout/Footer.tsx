import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Instagram, MessageCircle } from 'lucide-react';
import { ARTIST } from '@/data/artist';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F4EFEB] border-t border-[#E8E2D9] text-charcoal pt-16 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E3DDD5]">
          {/* Col 1: Artist identity & statement preview (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block focus:outline-none">
              <span className="font-serif text-2xl tracking-[0.12em] font-medium uppercase text-charcoal">
                {ARTIST.name}
              </span>
              <p className="text-xs tracking-[0.2em] text-charcoal-muted uppercase font-sans mt-1">
                {ARTIST.title}
              </p>
            </Link>
            <p className="text-sm text-charcoal-muted max-w-md leading-relaxed font-light">
              Explorations of organic pigment, cold wax, and geological memory. Original paintings and site-specific commissions for private collections worldwide.
            </p>
            <div className="pt-2 text-xs text-charcoal-muted uppercase tracking-[0.1em]">
              <span>Studios: </span>
              <span className="font-medium text-charcoal">{ARTIST.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-muted">
              <li>
                <Link href="/" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  Artwork Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  Artist Biography & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  Acquisitions & Commissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries & Social (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              Studio Inquiries
            </h4>
            <p className="text-sm text-charcoal-muted leading-relaxed font-light">
              For direct artwork acquisitions, custom commissions, or curatorial requests:
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${ARTIST.contact.email}`}
                className="flex items-center space-x-2 text-sm text-charcoal hover:text-terracotta transition-colors group"
              >
                <Mail className="w-4 h-4 text-terracotta" />
                <span className="border-b border-charcoal/20 group-hover:border-terracotta">
                  {ARTIST.contact.email}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={ARTIST.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-charcoal hover:text-terracotta transition-colors group"
              >
                <Instagram className="w-4 h-4 text-terracotta" />
                <span>Instagram: {ARTIST.contact.instagramHandle}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={ARTIST.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-charcoal hover:text-terracotta transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-terracotta" />
                <span>WhatsApp Studio Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted space-y-4 sm:space-y-0">
          <p>© {currentYear} {ARTIST.name}. All artwork and images are protected by copyright.</p>
          <p className="text-charcoal-muted/80">
            Handcrafted with architectural minimalism & fine art craft.
          </p>
        </div>
      </div>
    </footer>
  );
}

