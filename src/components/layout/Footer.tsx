'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Instagram, MessageCircle } from 'lucide-react';
import { getArtist } from '@/data/artist';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale, t } = useLanguage();
  const artist = getArtist(locale);

  return (
    <footer className="w-full bg-[#F4EFEB] border-t border-[#E8E2D9] text-charcoal pt-16 sm:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E3DDD5]">
          {/* Col 1: Artist identity & statement preview (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block focus:outline-none">
              <span className="font-serif text-2xl tracking-[0.12em] font-medium uppercase text-charcoal">
                {artist.name}
              </span>
              <p className="text-xs tracking-[0.2em] text-charcoal-muted uppercase font-sans mt-1">
                {artist.title}
              </p>
            </Link>
            <p className="text-sm text-charcoal-muted max-w-md leading-relaxed font-light">
              {t.footer.description}
            </p>
            <div className="pt-2 text-xs text-charcoal-muted uppercase tracking-[0.1em]">
              <span>{t.footer.studiosLabel}</span>
              <span className="font-medium text-charcoal">{artist.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              {t.footer.navigationHeading}
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-muted">
              <li>
                <Link href="/" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  {t.footer.navHome}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  {t.footer.navGallery}
                </Link>
              </li>
              <li>
                <Link href="/teaching" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  {t.footer.navTeaching}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  {t.footer.navAbout}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-charcoal hover:translate-x-1 inline-block transition-all">
                  {t.footer.navContact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries & Social (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
              {t.footer.inquiriesHeading}
            </h4>
            <p className="text-sm text-charcoal-muted leading-relaxed font-light">
              {t.footer.inquiriesDescription}
            </p>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${artist.contact.email}`}
                className="flex items-center space-x-2 text-sm text-charcoal hover:text-terracotta transition-colors group"
              >
                <Mail className="w-4 h-4 text-terracotta" />
                <span className="border-b border-charcoal/20 group-hover:border-terracotta">
                  {artist.contact.email}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={artist.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-charcoal hover:text-terracotta transition-colors group"
              >
                <Instagram className="w-4 h-4 text-terracotta" />
                <span>
                  {t.footer.instagramPrefix} {artist.contact.instagramHandle}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={artist.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-charcoal hover:text-terracotta transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-terracotta" />
                <span>{t.footer.whatsappDirect}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-muted space-y-4 sm:space-y-0">
          <p>
            © {currentYear} {artist.name}. {t.footer.copyright}
          </p>
          <p className="text-charcoal-muted/80">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
