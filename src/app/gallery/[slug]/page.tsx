import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ARTWORKS,
  getArtworkBySlug,
  getRelatedArtworks,
} from '@/data/artworks';
import { ARTIST } from '@/data/artist';
import { ArtworkDetailContent } from '@/components/gallery/ArtworkDetailContent';

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

  return <ArtworkDetailContent rawArtwork={artwork} relatedArtworks={relatedArtworks} />;
}
