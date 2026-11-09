import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { ARTIST } from '@/data/artist';

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#1C1B1A] text-canvas">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C49746] font-medium block">
          Inquiries & Private Acquisitions
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF8F5] max-w-3xl mx-auto leading-[1.12]">
          Discuss an original painting or commission a site-specific artwork.
        </h2>

        <p className="text-base sm:text-lg text-[#EDE6DF]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Whether you are a private collector, interior designer, or gallery curator, I welcome conversations regarding original works, upcoming exhibitions, and custom studio commissions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-canvas text-charcoal hover:bg-[#C49746] hover:text-charcoal text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-gallery-md group"
          >
            <span>Begin an Inquiry</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href={`mailto:${ARTIST.contact.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-canvas/30 hover:border-canvas hover:bg-canvas/10 text-canvas text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300"
          >
            <Mail className="w-4 h-4 mr-1 text-[#C49746]" />
            <span>{ARTIST.contact.email}</span>
          </a>

          <a
            href={ARTIST.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full border border-canvas/20 hover:border-canvas/40 text-canvas/80 hover:text-canvas text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 mr-1 text-[#C49746]" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        <p className="text-xs text-[#EDE6DF]/50 font-light pt-4">
          Worldwide insured art shipping • Certificates of Authenticity included
        </p>
      </div>
    </section>
  );
}

