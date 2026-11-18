'use client';

import React, { Suspense } from 'react';
import { ContactForm } from '@/components/contact/ContactForm';
import { getArtist } from '@/data/artist';
import { Mail, Instagram, MessageCircle, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ContactPage() {
  const { locale, t } = useLanguage();
  const artist = getArtist(locale);

  return (
    <div className="py-12 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header Section */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
            {t.contact.eyebrow}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal tracking-tight leading-[1.12]">
            {t.contact.title(artist.name)}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            {t.contact.description}
          </p>
        </div>

        {/* Main Grid: Info Cards (5 cols) & Contact Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Methods */}
            <div className="p-8 rounded-3xl bg-canvas-subtle border border-[#E8E2D9] space-y-6">
              <h3 className="font-serif text-xl font-medium text-charcoal">
                {t.contact.channelsHeading}
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${artist.contact.email}`}
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-canvas transition-colors group"
                >
                  <Mail className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal block group-hover:text-terracotta transition-colors">
                      {t.contact.directEmailLabel}
                    </span>
                    <span className="text-xs text-charcoal-muted font-light">
                      {artist.contact.email}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-terracotta" />
                </a>

                <a
                  href={artist.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-canvas transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal block group-hover:text-olive transition-colors">
                      {t.contact.whatsappLabel}
                    </span>
                    <span className="text-xs text-charcoal-muted font-light">
                      {artist.contact.whatsappNumber} {t.contact.whatsappNote}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-olive" />
                </a>

                <a
                  href={artist.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-canvas transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal block group-hover:text-terracotta transition-colors">
                      {t.contact.instagramLabel}
                    </span>
                    <span className="text-xs text-charcoal-muted font-light">
                      {artist.contact.instagramHandle} {t.contact.instagramNote}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-terracotta" />
                </a>
              </div>
            </div>

            {/* Studio Locations & Appointments */}
            <div className="p-8 rounded-3xl bg-canvas-subtle border border-[#E8E2D9] space-y-4 text-xs text-charcoal-muted font-light leading-relaxed">
              <div className="flex items-center space-x-2 text-charcoal font-medium text-sm">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span>{t.contact.locationsHeading}</span>
              </div>
              <p>
                <strong>{t.contact.istanbulStudioLabel}</strong> {t.contact.istanbulStudioDesc}
              </p>
              <p>
                <strong>{t.contact.londonStudioLabel}</strong> {t.contact.londonStudioDesc}
              </p>
              <div className="flex items-center space-x-2 text-charcoal font-medium text-sm pt-2">
                <Clock className="w-4 h-4 text-terracotta" />
                <span>{t.contact.responseTimeHeading}</span>
              </div>
              <p>{t.contact.responseTimeDesc}</p>
            </div>

            {/* Acquisition Notes */}
            <div className="p-8 rounded-3xl bg-canvas-subtle border border-[#E8E2D9] space-y-3 text-xs text-charcoal-muted font-light leading-relaxed">
              <div className="flex items-center space-x-2 text-charcoal font-medium text-sm">
                <ShieldCheck className="w-4 h-4 text-terracotta" />
                <span>{t.contact.guaranteesHeading}</span>
              </div>
              <p>{t.contact.guarantee1}</p>
              <p>{t.contact.guarantee2}</p>
              <p>{t.contact.guarantee3}</p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 text-center text-sm text-charcoal-muted">
                  {t.contact.loadingForm}
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
