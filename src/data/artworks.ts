import type { Locale } from '@/i18n/translations';
import { withBasePath } from '@/lib/utils';

export type ArtworkCategory =
  | 'Original Artwork'
  | 'Oil on Canvas'
  | 'Abstract Expressionism'
  | 'Earth & Mineral'
  | 'Atmospheric Landscapes'
  | 'Paper Studies';

export type AvailabilityStatus = 'Available' | 'Sold' | 'Reserved' | 'In Exhibition';

export interface ArtworkTranslation {
  title: string;
  year?: string;
  medium: string;
  dimensions?: string;
  description: string;
  story?: string;
  priceNote?: string;
}

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  category: ArtworkCategory;
  year: string;
  medium: string;
  dimensions: string;
  description: string;
  story?: string;
  image: string;
  width: number;
  height: number;
  status: AvailabilityStatus;
  featured?: boolean;
  priceNote?: string;
  orientation: 'portrait' | 'landscape' | 'square';
  /** Turkish translations for this artwork (edit alongside English fields) */
  tr?: ArtworkTranslation;
}

export const ARTWORK_CATEGORIES: ('All' | ArtworkCategory)[] = [
  'All',
  'Original Artwork',
  'Oil on Canvas',
  'Abstract Expressionism',
  'Earth & Mineral',
  'Atmospheric Landscapes',
  'Paper Studies',
];

export const CATEGORY_LABELS: Record<Locale, Record<'All' | ArtworkCategory, string>> = {
  tr: {
    All: 'Tümü',
    'Original Artwork': 'Orijinal Eser',
    'Oil on Canvas': 'Tuval Üzerine Yağlıboya',
    'Abstract Expressionism': 'Soyut Dışavurumculuk',
    'Earth & Mineral': 'Toprak & Mineral',
    'Atmospheric Landscapes': 'Atmosferik Manzaralar',
    'Paper Studies': 'Kâğıt Etütleri',
  },
  en: {
    All: 'All',
    'Original Artwork': 'Original Artwork',
    'Oil on Canvas': 'Oil on Canvas',
    'Abstract Expressionism': 'Abstract Expressionism',
    'Earth & Mineral': 'Earth & Mineral',
    'Atmospheric Landscapes': 'Atmospheric Landscapes',
    'Paper Studies': 'Paper Studies',
  },
};

export function getCategoryLabel(category: 'All' | ArtworkCategory, locale: Locale): string {
  return CATEGORY_LABELS[locale][category] ?? category;
}

/**
 * Editable default placeholder text for artworks where title, medium, year,
 * dimensions, or descriptions have not yet been specified.
 */
const PLACEHOLDER_EN = {
  year: 'Year to be added',
  medium: 'Medium & surface details to be added',
  dimensions: 'Dimensions to be added',
  description:
    'Original painting by Kezban Tanlı. Edit this entry in src/data/artworks.ts to add the title, medium, dimensions, year, and description.',
  priceNote: 'Contact for availability & pricing',
};

const PLACEHOLDER_TR = {
  year: 'Yıl eklenecek',
  medium: 'Teknik ve malzeme bilgisi eklenecek',
  dimensions: 'Boyut bilgisi eklenecek',
  description:
    'Kezban Tanlı tarafından üretilmiş orijinal eser. Eserin adını, tekniğini, boyutlarını, yılını ve açıklamasını eklemek için src/data/artworks.ts dosyasından bu kaydı düzenleyebilirsiniz.',
  priceNote: 'Mevcutluk ve fiyat bilgisi için iletişime geçin',
};

export const ARTWORKS: Artwork[] = [
  {
    id: 'art-01',
    slug: 'artwork-01',
    title: 'Original Artwork 01',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-01-portrait-in-blue.jpg'),
    width: 1028,
    height: 1392,
    status: 'Available',
    featured: true,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'portrait',
    tr: {
      title: 'Orijinal Eser 01',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-02',
    slug: 'artwork-02',
    title: 'Original Artwork 02',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-02-sunlit-garden-portrait.jpg'),
    width: 1284,
    height: 1800,
    status: 'Available',
    featured: true,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'portrait',
    tr: {
      title: 'Orijinal Eser 02',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-03',
    slug: 'artwork-03',
    title: 'Original Artwork 03',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-03-elder-portrait-study.jpg'),
    width: 1244,
    height: 1800,
    status: 'Available',
    featured: true,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'portrait',
    tr: {
      title: 'Orijinal Eser 03',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-04',
    slug: 'artwork-04',
    title: 'Original Artwork 04',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-04-harbor-boats-panorama.jpg'),
    width: 1800,
    height: 928,
    status: 'Available',
    featured: true,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'landscape',
    tr: {
      title: 'Orijinal Eser 04',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-05',
    slug: 'artwork-05',
    title: 'Original Artwork 05',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-05-coastal-town-reflections.jpg'),
    width: 1326,
    height: 1800,
    status: 'Available',
    featured: true,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'portrait',
    tr: {
      title: 'Orijinal Eser 05',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-06',
    slug: 'artwork-06',
    title: 'Original Artwork 06',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-06-pastel-portrait-on-toned-paper.jpg'),
    width: 1800,
    height: 1457,
    status: 'Available',
    featured: true,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'landscape',
    tr: {
      title: 'Orijinal Eser 06',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-07',
    slug: 'artwork-07',
    title: 'Original Artwork 07',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-07-contemporary-portrait-on-white.jpg'),
    width: 1800,
    height: 933,
    status: 'Available',
    featured: false,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'landscape',
    tr: {
      title: 'Orijinal Eser 07',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-08',
    slug: 'artwork-08',
    title: 'Original Artwork 08',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-08-golden-flowers-on-dark-ground.jpg'),
    width: 1800,
    height: 1510,
    status: 'Available',
    featured: false,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'landscape',
    tr: {
      title: 'Orijinal Eser 08',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-09',
    slug: 'artwork-09',
    title: 'Original Artwork 09',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-09-wildflower-meadow-landscape.jpg'),
    width: 1456,
    height: 1800,
    status: 'Available',
    featured: false,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'portrait',
    tr: {
      title: 'Orijinal Eser 09',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-10',
    slug: 'artwork-10',
    title: 'Original Artwork 10',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-10-ochre-sky-and-hills.jpg'),
    width: 1793,
    height: 1791,
    status: 'Available',
    featured: false,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'square',
    tr: {
      title: 'Orijinal Eser 10',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-11',
    slug: 'artwork-11',
    title: 'Original Artwork 11',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-11-sunset-bay-impasto.jpg'),
    width: 1516,
    height: 1626,
    status: 'Available',
    featured: false,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'square',
    tr: {
      title: 'Orijinal Eser 11',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-12',
    slug: 'artwork-12',
    title: 'Original Artwork 12',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-12-trees-and-water-reflection.jpg'),
    width: 1684,
    height: 1657,
    status: 'Available',
    featured: false,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'square',
    tr: {
      title: 'Orijinal Eser 12',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-13',
    slug: 'artwork-13',
    title: 'Original Artwork 13',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-13-azure-coastal-horizon.jpg'),
    width: 1342,
    height: 1584,
    status: 'Available',
    featured: false,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'portrait',
    tr: {
      title: 'Orijinal Eser 13',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
  {
    id: 'art-14',
    slug: 'artwork-14',
    title: 'Original Artwork 14',
    category: 'Original Artwork',
    year: PLACEHOLDER_EN.year,
    medium: PLACEHOLDER_EN.medium,
    dimensions: PLACEHOLDER_EN.dimensions,
    description: PLACEHOLDER_EN.description,
    image: withBasePath('/images/artworks/artwork-14-sunlit-village-lane.jpg'),
    width: 1497,
    height: 1800,
    status: 'Available',
    featured: false,
    priceNote: PLACEHOLDER_EN.priceNote,
    orientation: 'portrait',
    tr: {
      title: 'Orijinal Eser 14',
      year: PLACEHOLDER_TR.year,
      medium: PLACEHOLDER_TR.medium,
      dimensions: PLACEHOLDER_TR.dimensions,
      description: PLACEHOLDER_TR.description,
      priceNote: PLACEHOLDER_TR.priceNote,
    },
  },
];

export function getLocalizedArtwork(artwork: Artwork, locale: Locale): Artwork {
  if (locale === 'tr' && artwork.tr) {
    return {
      ...artwork,
      title: artwork.tr.title,
      year: artwork.tr.year ?? artwork.year,
      medium: artwork.tr.medium,
      dimensions: artwork.tr.dimensions ?? artwork.dimensions,
      description: artwork.tr.description,
      story: artwork.tr.story ?? artwork.story,
      priceNote: artwork.tr.priceNote ?? artwork.priceNote,
    };
  }
  return artwork;
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return ARTWORKS.find((artwork) => artwork.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return ARTWORKS.filter((artwork) => artwork.featured);
}

export function getArtworksByCategory(category: string): Artwork[] {
  if (category === 'All') return ARTWORKS;
  return ARTWORKS.filter((artwork) => artwork.category === category);
}

export function getRelatedArtworks(currentSlug: string, limit = 3): Artwork[] {
  const current = getArtworkBySlug(currentSlug);
  if (!current) return ARTWORKS.slice(0, limit);

  return ARTWORKS.filter(
    (item) => item.slug !== currentSlug && (item.category === current.category || item.status === 'Available')
  ).slice(0, limit);
}
