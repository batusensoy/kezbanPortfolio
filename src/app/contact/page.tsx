import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { ARTIST } from '@/data/artist';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Write to me',
  description: `Get in touch with Kezban Tanli about paintings, commissions, or anything else.`,
};

export default function ContactPage() {
  return (
    <div className="bg-canvas min-h-screen">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-28">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="font-hand text-2xl text-terracotta mb-4">get in touch</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-normal text-charcoal leading-[1.08] mb-6">
            Write to me.
          </h1>
          <p className="text-base sm:text-lg text-charcoal/55 leading-relaxed font-light">
            I read everything myself. Whether you&apos;re interested in a painting,
            thinking about a commission, or just want to say something — I&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">

          {/* Left: direct channels (2 cols) */}
          <div className="lg:col-span-2 space-y-10">

            {/* Direct ways to reach */}
            <div className="space-y-5">
              <p className="font-hand text-lg text-charcoal/50">the quickest ways</p>

              <a
                href={`mailto:${ARTIST.contact.email}`}
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <div>
                  <span className="text-sm text-charcoal group-hover:text-terracotta transition-colors block">
                    email
                  </span>
                  <span className="text-xs text-charcoal/45 font-light">
                    {ARTIST.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={ARTIST.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MessageCircle className="w-4 h-4 text-terracotta shrink-0" />
                <div>
                  <span className="text-sm text-charcoal group-hover:text-terracotta transition-colors block">
                    whatsapp
                  </span>
                  <span className="text-xs text-charcoal/45 font-light">
                    {ARTIST.contact.whatsappNumber}
                  </span>
                </div>
              </a>

              <a
                href={ARTIST.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Instagram className="w-4 h-4 text-terracotta shrink-0" />
                <div>
                  <span className="text-sm text-charcoal group-hover:text-terracotta transition-colors block">
                    instagram
                  </span>
                  <span className="text-xs text-charcoal/45 font-light">
                    {ARTIST.contact.instagramHandle}
                  </span>
                </div>
              </a>
            </div>

            {/* What to write about */}
            <div className="space-y-4 pt-2 border-t border-charcoal/8">
              <p className="font-hand text-lg text-charcoal/50">you might write about</p>
              <ul className="space-y-2 text-sm text-charcoal/55 font-light leading-relaxed">
                <li>a painting you saw and liked</li>
                <li>a commission idea you have in mind</li>
                <li>seeing the work in person</li>
                <li>anything, really</li>
              </ul>
            </div>

            <p className="text-xs text-charcoal/35 font-light leading-relaxed">
              I reply to every message personally, usually within a day or two.
            </p>
          </div>

          {/* Right: form (3 cols) */}
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="py-16 text-center text-sm text-charcoal/40 font-light">
                  Loading form…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>

      </div>
    </div>
  );
}
