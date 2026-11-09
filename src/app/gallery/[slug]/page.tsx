import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ARTWORKS,
  getArtworkBySlug,
  getRelatedArtworks,
} from '@/data/artworks';
import { ARTIST } from '@/data/artist';
import { ArtworkCard } from '@/components/ui/ArtworkCard';
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

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTWORKS.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const artwork = getArtworkBySlug(params.slug);
  if (!artwork) return { title: 'Artwork Not Found' };

  return {
    title: `${artwork.title} (${artwork.year})`,
    description: `${artwork.title} — ${artwork.medium}, ${artwork.dimensions}. Original fine art painting by ${ARTIST.name}.`,
    openGraph: {
      title: `${artwork.title} | ${ARTIST.name}`,
      description: artwork.description,
      images: [{ url: artwork.image }],
    },
  };
}

export default function ArtworkDetailPage({ params }: Props) {
  const artwork = getArtworkBySlug(params.slug);

  if (!artwork) {
    notFound();
  }

  const relatedArtworks = getRelatedArtworks(artwork.slug, 3);

  // Generate mailto link for direct inquiry
  const emailSubject = encodeURIComponent(`Acquisition Inquiry: "${artwork.title}"`);
  const emailBody = encodeURIComponent(
    `Dear ${ARTIST.name},\n\nI am writing to inquire about your original artwork "${artwork.title}" (${artwork.year}, ${artwork.medium}, ${artwork.dimensions}).\n\nCould you please share further details regarding acquisition, certificate of authenticity, and delivery arrangements?\n\nKind regards,\n[Your Name]\n[Your Location]`
  );
  const mailtoUrl = `mailto:${ARTIST.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  // WhatsApp prefilled message
  const whatsappMsg = encodeURIComponent(
    `Hello ${ARTIST.name}, I am interested in inquiring about your artwork "${artwork.title}". Could you please provide pricing and availability?`
  );
  const whatsappUrl = `https://wa.me/905320000000?text=${whatsappMsg}`;

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
            <span>Return to Exhibition Gallery</span>
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
                <span>Natural daylight studio photograph</span>
                <span>Original Work #{artwork.id}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Curatorial Details & Inquiry Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3 pb-6 border-b border-[#E8E2D9]">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium">
                  {artwork.category}
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
                  <span>{artwork.status === 'Sold' ? 'Private Collection' : artwork.status}</span>
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
                  <span className="font-medium text-charcoal block">Medium & Materials</span>
                  <span className="text-charcoal-muted font-light">{artwork.medium}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Ruler className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-charcoal block">Dimensions</span>
                  <span className="text-charcoal-muted font-light">{artwork.dimensions}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-charcoal block">Creation Year</span>
                  <span className="text-charcoal-muted font-light">{artwork.year}</span>
                </div>
              </div>
            </div>

            {/* Curatorial Description & Story */}
            <div className="space-y-4 pt-2">
              <h3 className="font-serif text-lg font-medium text-charcoal">
                Curatorial Note
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
                    <span>Enquire About This Painting</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center justify-center space-x-2 py-3 rounded-full border border-charcoal/30 hover:border-charcoal hover:bg-canvas-subtle text-charcoal text-xs uppercase tracking-wider font-medium transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-terracotta" />
                      <span>Email Studio</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 py-3 rounded-full border border-charcoal/30 hover:border-charcoal hover:bg-canvas-subtle text-charcoal text-xs uppercase tracking-wider font-medium transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-olive" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-canvas-subtle border border-[#E8E2D9] text-xs text-charcoal-muted leading-relaxed">
                    This artwork is currently in a {artwork.status === 'Sold' ? 'private collection' : 'reserved institutional exhibition'}. Similar paintings may be commissioned upon request.
                  </div>

                  <Link
                    href={`/contact?commission=${encodeURIComponent(artwork.title)}`}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-full border border-charcoal text-charcoal hover:bg-charcoal hover:text-canvas text-xs uppercase tracking-[0.16em] font-medium transition-colors"
                  >
                    <span>Commission a Similar Artwork</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              <div className="flex items-center space-x-2 pt-2 text-[11px] text-charcoal-muted font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-terracotta" />
                <span>Certificate of authenticity & museum crating included</span>
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
                  Related Paintings
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal">
                  You May Also Appreciate
                </h3>
              </div>
              <Link
                href="/gallery"
                className="text-xs uppercase tracking-wider text-charcoal hover:text-terracotta underline font-medium"
              >
                View Full Collection
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

