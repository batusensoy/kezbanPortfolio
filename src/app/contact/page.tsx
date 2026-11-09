import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { ARTIST } from '@/data/artist';
import { Mail, Instagram, MessageCircle, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Art Acquisition Inquiries',
  description: `Contact contemporary artist ${ARTIST.name} for artwork acquisitions, bespoke commissions, gallery exhibitions, or private studio appointments.`,
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header Section */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
            Studio Inquiries
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal tracking-tight leading-[1.12]">
            Connect with {ARTIST.name}
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
            I welcome conversations regarding original paintings, site-specific architectural commissions, gallery exhibitions, and private studio visits in Istanbul and London.
          </p>
        </div>

        {/* Main Grid: Info Cards (5 cols) & Contact Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Methods */}
            <div className="p-8 rounded-3xl bg-canvas-subtle border border-[#E8E2D9] space-y-6">
              <h3 className="font-serif text-xl font-medium text-charcoal">
                Direct Studio Channels
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${ARTIST.contact.email}`}
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-canvas transition-colors group"
                >
                  <Mail className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal block group-hover:text-terracotta transition-colors">
                      Direct Email
                    </span>
                    <span className="text-xs text-charcoal-muted font-light">
                      {ARTIST.contact.email}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-terracotta" />
                </a>

                <a
                  href={ARTIST.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-canvas transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal block group-hover:text-olive transition-colors">
                      WhatsApp Studio Direct
                    </span>
                    <span className="text-xs text-charcoal-muted font-light">
                      {ARTIST.contact.whatsappNumber} (Instant Messaging)
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-olive" />
                </a>

                <a
                  href={ARTIST.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-canvas transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-charcoal block group-hover:text-terracotta transition-colors">
                      Instagram Journal
                    </span>
                    <span className="text-xs text-charcoal-muted font-light">
                      {ARTIST.contact.instagramHandle} (Studio WIP & Stories)
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
                <span>Studio Locations</span>
              </div>
              <p>
                <strong>Istanbul Studio:</strong> Beyoğlu / Karaköy art district (by appointment).
              </p>
              <p>
                <strong>London Studio:</strong> East London creative quarter (selected dates each quarter).
              </p>
              <div className="flex items-center space-x-2 text-charcoal font-medium text-sm pt-2">
                <Clock className="w-4 h-4 text-terracotta" />
                <span>Response Time</span>
              </div>
              <p>
                Direct inquiries are answered personally within 24–48 hours.
              </p>
            </div>

            {/* Acquisition Notes */}
            <div className="p-8 rounded-3xl bg-canvas-subtle border border-[#E8E2D9] space-y-3 text-xs text-charcoal-muted font-light leading-relaxed">
              <div className="flex items-center space-x-2 text-charcoal font-medium text-sm">
                <ShieldCheck className="w-4 h-4 text-terracotta" />
                <span>Acquisition Guarantees</span>
              </div>
              <p>
                • All original paintings include an artist-signed Certificate of Authenticity.
              </p>
              <p>
                • Custom wooden crate packaging with multi-layer archival insulation.
              </p>
              <p>
                • Worldwide tracked and insured courier shipping (DHL Express / Specialist Art Handlers).
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-12 text-center text-sm text-charcoal-muted">Loading inquiry form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
