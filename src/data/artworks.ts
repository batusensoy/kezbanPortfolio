export type ArtworkCategory =
  | 'Oil on Canvas'
  | 'Abstract Expressionism'
  | 'Earth & Mineral'
  | 'Atmospheric Landscapes'
  | 'Paper Studies';

export type AvailabilityStatus = 'Available' | 'Sold' | 'Reserved' | 'In Exhibition';

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
  status: AvailabilityStatus;
  featured?: boolean;
  priceNote?: string;
  orientation?: 'portrait' | 'landscape' | 'square';
}

export const ARTWORK_CATEGORIES: ('All' | ArtworkCategory)[] = [
  'All',
  'Oil on Canvas',
  'Abstract Expressionism',
  'Earth & Mineral',
  'Atmospheric Landscapes',
  'Paper Studies',
];

export const ARTWORKS: Artwork[] = [
  {
    id: 'art-01',
    slug: 'solitude-in-ochre',
    title: 'Solitude in Ochre No. 4',
    category: 'Earth & Mineral',
    year: '2026',
    medium: 'Raw Moroccan ochre, cold wax, and walnut oil on Belgian linen',
    dimensions: '160 × 120 cm (63 × 47 in)',
    description:
      'A monumental study in earth pigment and spatial restraint. The canvas is built upon twelve hand-burnished layers of limestone gesso, topped with natural Moroccan ochre and warm sienna.',
    story:
      'Conceived during an autumn residency, observing ancient stone terraces where pigments have weathered against wind and sun for centuries.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: true,
    priceNote: 'Price on request',
    orientation: 'portrait',
  },
  {
    id: 'art-02',
    slug: 'transient-light-at-dawn',
    title: 'Transient Light at Dawn',
    category: 'Atmospheric Landscapes',
    year: '2025',
    medium: 'Oil, marble dust, and rabbit-skin glue on raw canvas',
    dimensions: '180 × 140 cm (71 × 55 in)',
    description:
      'Soft luminous horizontal veils evoke the quiet stillness of early morning mist over calm water. Mineral whites dissolve into delicate umbers and raw linen edges.',
    story:
      'Exploring the exact 15-minute window before sunrise when colors are not yet distinct, but felt as atmospheric temperatures.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: true,
    priceNote: 'Price on request',
    orientation: 'landscape',
  },
  {
    id: 'art-03',
    slug: 'dialogue-with-silence',
    title: 'Dialogue with Silence',
    category: 'Abstract Expressionism',
    year: '2025',
    medium: 'Charcoal, bone black, and titanium oil on hand-stretched linen',
    dimensions: '150 × 150 cm (59 × 59 in)',
    description:
      'Expressive gestural strokes collide with structured negative space. A meditation on restraint, silence, and the power of mark-making.',
    story:
      'Influenced by classical Japanese sumi-e ink traditions translated into heavy Western oil and cold wax mediums.',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=85',
    status: 'Reserved',
    featured: true,
    priceNote: 'Reserved for institutional exhibition',
    orientation: 'square',
  },
  {
    id: 'art-04',
    slug: 'terracotta-threshold',
    title: 'Terracotta Threshold',
    category: 'Oil on Canvas',
    year: '2026',
    medium: 'Terracotta slip, dry pigment, and damar varnish on unprimed canvas',
    dimensions: '130 × 100 cm (51 × 39 in)',
    description:
      'Warm architectural geometry softened by organic palette knife impasto. The surface retains the raw tactile grain of Aegean clays.',
    story:
      'Reflecting the warm terracotta tiles and ancient ceramic shards discovered in coastal excavations along the Mediterranean.',
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: true,
    priceNote: 'Price on request',
    orientation: 'portrait',
  },
  {
    id: 'art-05',
    slug: 'limestone-echo',
    title: 'Limestone Echo',
    category: 'Earth & Mineral',
    year: '2024',
    medium: 'Crushed travertine, cold wax, and bone white on wood panel',
    dimensions: '110 × 90 cm (43 × 35 in)',
    description:
      'Monochromatic relief with micro-cracks and textured fissures that catch raking natural light throughout the day.',
    story:
      'A tactile tribute to geological time recorded in calcified travertine and ancient water flows.',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85',
    status: 'Sold',
    featured: false,
    priceNote: 'Private Collection, Geneva',
    orientation: 'portrait',
  },
  {
    id: 'art-06',
    slug: 'nocturne-in-indigo',
    title: 'Nocturne in Indigo and Umber',
    category: 'Atmospheric Landscapes',
    year: '2025',
    medium: 'Lapis lazuli pigment, raw umber, and walnut oil on Belgian linen',
    dimensions: '170 × 130 cm (67 × 51 in)',
    description:
      'Deep, velvety blues wash into earthy graphite depths. The piece shifts dramatically between warm incandescent and cool natural window light.',
    story:
      'Painted over three weeks of night sessions in the studio, listening to the ambient sound of rain across the Golden Horn.',
    image: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: true,
    priceNote: 'Price on request',
    orientation: 'landscape',
  },
  {
    id: 'art-07',
    slug: 'study-in-linen-ii',
    title: 'Study in Linen II',
    category: 'Paper Studies',
    year: '2026',
    medium: 'Walnut ink and mineral wash on handmade 300gsm deckled paper',
    dimensions: '76 × 56 cm (30 × 22 in)',
    description:
      'Intimate, immediate brush study featuring raw deckled paper edges. Framed floating inside white ash museum glass.',
    story:
      'An exploratory study created in preparation for the monumental 2026 gallery series in London.',
    image: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: false,
    priceNote: 'Price on request (includes custom frame)',
    orientation: 'portrait',
  },
  {
    id: 'art-08',
    slug: 'the-memory-of-stone',
    title: 'The Memory of Stone',
    category: 'Abstract Expressionism',
    year: '2024',
    medium: 'Graphite powder, chalk, and oil stick on heavy canvas',
    dimensions: '140 × 110 cm (55 × 43 in)',
    description:
      'Broad visceral scraping revealing underlayers of bone white and slate gray. A powerful statement of physical materiality.',
    story:
      'Inspired by the monolithic stone architectures of antiquity where weathered facades bear the marks of centuries.',
    image: 'https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&w=1200&q=85',
    status: 'Sold',
    featured: false,
    priceNote: 'Private Collection, London',
    orientation: 'portrait',
  },
  {
    id: 'art-09',
    slug: 'botanical-whisper',
    title: 'Botanical Whisper No. 7',
    category: 'Oil on Canvas',
    year: '2025',
    medium: 'Sap green, raw sienna, and cold wax on linen canvas',
    dimensions: '120 × 90 cm (47 × 35 in)',
    description:
      'Subtle organic forms emerge and dissolve into a warm beige field. A gentle, poetic exploration of biological cycles.',
    story:
      'Created after wandering through winter gardens where dry seed heads and seed pods held sculptural grace against frost.',
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: false,
    priceNote: 'Price on request',
    orientation: 'portrait',
  },
  {
    id: 'art-10',
    slug: 'alchemical-palette',
    title: 'Alchemical Palette No. 1',
    category: 'Abstract Expressionism',
    year: '2026',
    medium: 'Pure cadmium, cobalt wash, and walnut oil on Belgian linen',
    dimensions: '135 × 105 cm (53 × 41 in)',
    description:
      'Vibrant chromatic accents balanced by expansive linen fields. Layers of knife impasto contrast with translucent glazes.',
    story:
      'Exploring the transformation of raw mineral powders into luminous color planes through hand-mixed walnut oils.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: true,
    priceNote: 'Price on request',
    orientation: 'portrait',
  },
  {
    id: 'art-11',
    slug: 'resonance-in-azure',
    title: 'Resonance in Azure and Chalk',
    category: 'Atmospheric Landscapes',
    year: '2025',
    medium: 'Ultramarine pigment, raw plaster, and beeswax on hemp canvas',
    dimensions: '160 × 130 cm (63 × 51 in)',
    description:
      'Sweeping horizons of azure blue interacting with tactile chalk dust. An homage to Mediterranean coastal horizons.',
    story:
      'Recalling midsummer afternoons gazing across the Aegean sea where sky and water dissolve into a single luminous plane.',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: false,
    priceNote: 'Price on request',
    orientation: 'landscape',
  },
  {
    id: 'art-12',
    slug: 'studio-meditation',
    title: 'Studio Meditation in Umber',
    category: 'Paper Studies',
    year: '2026',
    medium: 'Burnt umber, gum arabic, and mineral wash on 300gsm cotton rag',
    dimensions: '80 × 60 cm (31 × 24 in)',
    description:
      'Lyrical calligraphic marks floating on heavy cream deckled paper. Framed in museum-grade non-reflective UV glass.',
    story:
      'Painted in the quiet hours of early morning before city sounds begin, reflecting pure contemplative intuition.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=85',
    status: 'Available',
    featured: false,
    priceNote: 'Price on request (includes custom frame)',
    orientation: 'portrait',
  },
];

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
