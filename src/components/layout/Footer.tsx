import React from 'react';
import Link from 'next/link';
import { Mail, Instagram, MessageCircle } from 'lucide-react';
import { ARTIST } from '@/data/artist';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-canvas border-t border-charcoal/8 pt-16 sm:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 pb-12 border-b border-charcoal/8">

          {/* Identity */}
          <div className="sm:col-span-1 space-y-3">
            <Link href="/" className="inline-block">
              <span className="font-hand text-3xl text-charcoal hover:text-terracotta transition-colors">
                Kezban
              </span>
            </Link>
            <p className="text-sm text-charcoal/45 font-light leading-relaxed">
              Painter. {ARTIST.location}.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <p className="text-xs text-charcoal/30 uppercase tracking-wider font-light">pages</p>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'home' },
                { href: '/gallery', label: 'paintings' },
                { href: '/about', label: 'about' },
                { href: '/contact', label: 'write to me' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal/55 hover:text-charcoal transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-xs text-charcoal/30 uppercase tracking-wider font-light">reach me</p>
            <div className="space-y-3">
              <a
                href={`mailto:${ARTIST.contact.email}`}
                className="flex items-center gap-2 text-sm text-charcoal/55 hover:text-charcoal transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span className="font-light">{ARTIST.contact.email}</span>
              </a>
              <a
                href={ARTIST.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-charcoal/55 hover:text-charcoal transition-colors group"
              >
                <Instagram className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span className="font-light">{ARTIST.contact.instagramHandle}</span>
              </a>
              <a
                href={ARTIST.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-charcoal/55 hover:text-charcoal transition-colors group"
              >
                <MessageCircle className="w-3.5 h-3.5 text-terracotta shrink-0" />
                <span className="font-light">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-charcoal/30 font-light">
            © {currentYear} {ARTIST.name}. All artwork is protected by copyright.
          </p>
          <p className="font-hand text-base text-charcoal/25">
            painted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
