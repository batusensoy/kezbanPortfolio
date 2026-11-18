'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Artwork,
  getLocalizedArtwork,
  getCategoryLabel,
} from '@/data/artworks';
import { getArtist } from '@/data/artist';
import { ArtworkCard } from '@/components/ui/ArtworkCard';
import { useLanguage } from '@/i18n/LanguageContext';
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MessageCircle,
  ShieldCheck,
  Calendar,
  Ruler,
  Palette,
} from 'lucide-react';

interface ArtworkDetailContentProps {
  rawArtwork: Artwork;
  relatedArtworks: Artwork[];
}

export function ArtworkDetailContent({
  rawArtwork,
  relatedArtworks,
}: ArtworkDetailContentProps) {
  const { locale, t } = useLanguage();
  const artist = getArtist(locale);
  const artwork = getLocalizedArtwork(rawArtwork, locale);

  const emailSubject = encodeURIComponent(
    t.contact.form.templates.artworkSubject(artwork.title)
  );
  const emailBody = encodeURIComponent(
    t.contact.form.templates.artworkBody(artist.name, artwork.title)
  );
  const mailtoUrl = `mailto:${artist.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMsg = encodeURIComponent(
    t.contact.form.templates.artworkBody(artist.name, artwork.title)
  );
  const whatsappUrl = `${artist.contact.whatsappUrl}?text=${whatsappMsg}`;

  return (
    <article className="py-10 sm:py-16 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] text-charcoal-muted hover:text-charcoal transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{t.gallery.detail.backToGallery}</span>
          </Link>
        </div>

        {/* Main Artwork Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Artwork Image in Museum Frame (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative p-3 sm:p-5 bg-canvas-elevated rounded-2xl border border-[#E3DDD5] shadow-frame">
              <div
                className={`relative w-full overflow-hidden rounded-xl bg-[#EDE6DF] ${
                  artwork.orientation === 'landscape'
                    ? 'aspect-[16/11]'
                    : artwork.orientation === 'square'
                    ? 'aspect-square'
                    : 'aspect-[3/4]'
                }`}
              >
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </div>

              {/* High-res image caption */}
              <div className="mt-4 flex items-center justify-between text-xs text-charcoal-muted font-light px-1">
                <span>{t.gallery.detail.daylightCaption}</span>
                <span>
                  {t.gallery.detail.originalWorkPrefix}
                  {artwork.id}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Curatorial Details & Inquiry Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3 pb-6 border-b border-[#E8E2D9]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium">
                  {getCategoryLabel(artwork.category, locale)}
                </span>

                <span
                  className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-medium ${
                    artwork.status === 'Available'
                      ? 'bg-olive/15 text-olive border border-olive/30'
                      : artwork.status === 'Sold'
                      ? 'bg-charcoal text-canvas'
                      : 'bg-ochre/20 text-charcoal border border-ochre/40'
                  }`}
                >
                  {artwork.status === 'Available' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
                  )}
                  <span>{t.gallery.status[artwork.status]}</span>
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.12]">
                {artwork.title}
              </h1>

              {artwork.priceNote && (
                <p className="text-sm font-medium text-charcoal-muted tracking-wide pt-1">
                  {artwork.priceNote}
                </p>
              )}
            </div>

            {/* Technical Specifications */}
            <div className="space-y-4 py-4 text-sm">
              <div className="flex items-start space-x-3">
                <Palette className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-charcoal block">
                    {t.gallery.detail.mediumLabel}
                  </span>
                  <span className="text-charcoal-muted font-light">{artwork.medium}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Ruler className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-charcoal block">
                    {t.gallery.detail.dimensionsLabel}
                  </span>
                  <span className="text-charcoal-muted font-light">{artwork.dimensions}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-charcoal block">
                    {t.gallery.detail.yearLabel}
                  </span>
                  <span className="text-charcoal-muted font-light">{artwork.year}</span>
                </div>
              </div>
            </div>

            {/* Curatorial Description & Story */}
            <div className="space-y-4 pt-2">
              <h3 className="font-serif text-lg font-medium text-charcoal">
                {t.gallery.detail.curatorialNoteHeading}
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                {artwork.description}
              </p>

              {artwork.story && (
                <div className="p-4 rounded-xl bg-canvas-subtle border-l-2 border-terracotta text-xs text-charcoal-muted italic leading-relaxed">
                  &ldquo;{artwork.story}&rdquo;
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#E8E2D9]">
              {artwork.status === 'Available' ? (
                <>
                  <Link
                    href={`/contact?artwork=${encodeURIComponent(artwork.title)}`}
                    className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-full bg-charcoal text-canvas hover:bg-terracotta text-xs uppercase tracking-[0.16em] font-medium transition-colors shadow-gallery-sm group"
                  >
                    <span>{t.gallery.detail.enquirePaintingBtn}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center space-x-2 py-3 rounded-full border border-charcoal/30 hover:border-charcoal hover:bg-canvas-subtle text-charcoal text-xs uppercase tracking-wider font-medium transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-terracotta" />
                      <span>{t.gallery.detail.emailStudioBtn}</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 py-3 rounded-full border border-charcoal/30 hover:border-charcoal hover:bg-canvas-subtle text-charcoal text-xs uppercase tracking-wider font-medium transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-olive" />
                      <span>{t.gallery.detail.whatsappBtn}</span>
                    </a>
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-canvas-subtle border border-[#E8E2D9] text-xs text-charcoal-muted leading-relaxed">
                    {t.gallery.detail.unavailableNotice(artwork.status === 'Sold')}
                  </div>

                  <Link
                    href={`/contact?commission=${encodeURIComponent(artwork.title)}`}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-canvas text-xs uppercase tracking-[0.16em] font-medium transition-colors"
                  >
                    <span>{t.gallery.detail.commissionSimilarBtn}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              <div className="flex items-center space-x-2 pt-2 text-[11px] text-charcoal-muted font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
                <span>{t.gallery.detail.authenticityNote}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Artworks Section */}
        {relatedArtworks.length > 0 && (
          <div className="pt-20 border-t border-[#E8E2D9] space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block mb-2">
                  {t.gallery.detail.relatedEyebrow}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal">
                  {t.gallery.detail.relatedTitle}
                </h3>
              </div>
              <Link
                href="/gallery"
                className="text-xs uppercase tracking-wider text-charcoal hover:text-terracotta underline font-medium"
              >
                {t.gallery.detail.viewFullCollectionLink}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArtworks.map((related) => (
                <ArtworkCard key={related.id} artwork={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
