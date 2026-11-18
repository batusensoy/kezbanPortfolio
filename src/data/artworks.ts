import type { Locale } from '@/i18n/translations';

export type ArtworkCategory =
  | 'Oil on Canvas'
  | 'Abstract Expressionism'
  | 'Earth & Mineral'
  | 'Atmospheric Landscapes'
  | 'Paper Studies';

export type AvailabilityStatus = 'Available' | 'Sold' | 'Reserved' | 'In Exhibition';

export interface ArtworkTranslation {
  title: string;
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
  status: AvailabilityStatus;
  featured?: boolean;
  priceNote?: string;
  orientation?: 'portrait' | 'landscape' | 'square';
  /** Turkish translations for this artwork (edit alongside English fields) */
  tr?: ArtworkTranslation;
}

export const ARTWORK_CATEGORIES: ('All' | ArtworkCategory)[] = [
  'All',
  'Oil on Canvas',
  'Abstract Expressionism',
  'Earth & Mineral',
  'Atmospheric Landscapes',
  'Paper Studies',
];

export const CATEGORY_LABELS: Record<Locale, Record<'All' | ArtworkCategory, string>> = {
  tr: {
    All: 'Tümü',
    'Oil on Canvas': 'Tuval Üzerine Yağlıboya',
    'Abstract Expressionism': 'Soyut Dışavurumculuk',
    'Earth & Mineral': 'Toprak & Mineral',
    'Atmospheric Landscapes': 'Atmosferik Manzaralar',
    'Paper Studies': 'Kâğıt Etütleri',
  },
  en: {
    All: 'All',
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
    tr: {
      title: 'Toprak Sarısında Yalnızlık No. 4',
      medium: 'Belçika keteni üzerine ham Fas okru, soğuk balmumu ve ceviz yağı',
      dimensions: '160 × 120 cm',
      description:
        'Toprak pigmenti ve mekânsal dinginlik üzerine anıtsal bir çalışma. Tuval, elde perdahlanmış on iki kat kireçtaşı astar üzerine doğal Fas okru ve sıcak sienna katmanlarıyla inşa edilmiştir.',
      story:
        'Yüzyıllar boyunca rüzgâr ve güneşe karşı aşınmış antik taş terasları gözlemleyerek bir sonbahar misafir sanatçı programı sırasında kurgulandı.',
      priceNote: 'Fiyat bilgisi için iletişime geçin',
    },
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
    tr: {
      title: 'Şafakta Geçici Işık',
      medium: 'Ham tuval üzerine yağlıboya, mermer tozu ve tavşan derisi tutkalı',
      dimensions: '180 × 140 cm',
      description:
        'Yumuşak ve ışıltılı yatay katmanlar, durgun sular üzerindeki sabah sisinin sessiz dinginliğini çağrıştırır. Mineral beyazlar zarif toprak tonlarına ve ham keten dokusuna karışır.',
      story:
        'Gün doğumundan hemen önceki, renklerin henüz tam ayrışmadığı ancak atmosferik bir sıcaklık olarak hissedildiği o 15 dakikalık eşiği araştırır.',
      priceNote: 'Fiyat bilgisi için iletişime geçin',
    },
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
    tr: {
      title: 'Sessizlikle Diyalog',
      medium: 'Elde gerilmiş keten üzerine füzen, kemik siyahı ve titanyum yağlıboya',
      dimensions: '150 × 150 cm',
      description:
        'Dışavurumcu fırça darbeleri yapılandırılmış negatif alanla buluşur. Ölçülülük, sessizlik ve iz bırakmanın gücü üzerine bir meditasyon.',
      story:
        'Klasik Japon sumi-e mürekkep geleneğinin yoğun yağlıboya ve soğuk balmumu tekniklerine uyarlanmasından ilham almıştır.',
      priceNote: 'Kurumsal sergi için ayrılmıştır',
    },
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
    tr: {
      title: 'Terakota Eşik',
      medium: 'Astarsız tuval üzerine terakota astarı, kuru pigment ve damar verniği',
      dimensions: '130 × 100 cm',
      description:
        'Organik spatül impastosu ile yumuşatılmış sıcak mimari geometri. Yüzey, Ege killerinin ham ve dokunsal taneciklerini korur.',
      story:
        'Akdeniz kıyılarındaki kazılarda ortaya çıkan sıcak terakota karoları ve antik seramik parçalarını yansıtır.',
      priceNote: 'Fiyat bilgisi için iletişime geçin',
    },
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
    tr: {
      title: 'Kireçtaşı Yankısı',
      medium: 'Ahşap panel üzerine ezilmiş traverten, soğuk balmumu ve kemik beyazı',
      dimensions: '110 × 90 cm',
      description:
        'Gün boyunca yatay doğal ışığı yakalayan mikro çatlaklar ve dokulu yarıklara sahip monokrom rölyef.',
      story:
        'Kalsifiye travertenlerde ve antik su yollarında kayıtlı jeolojik zamana dokunsal bir saygı duruşu.',
      priceNote: 'Özel Koleksiyon, Cenevre',
    },
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
    tr: {
      title: 'İndigo ve Toprak Tonlarında Noktürn',
      medium: 'Belçika keteni üzerine lapis lazuli pigmenti, ham umber ve ceviz yağı',
      dimensions: '170 × 130 cm',
      description:
        'Derin, kadifemsi maviler toprak ve grafit derinliklerine karışır. Eser, sıcak iç mekân aydınlatması ile doğal pencere ışığı arasında dramatik bir dönüşüm sergiler.',
      story:
        'Haliç üzerindeki yağmur sesini dinleyerek stüdyoda üç hafta süren gece çalışmaları sırasında resmedildi.',
      priceNote: 'Fiyat bilgisi için iletişime geçin',
    },
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
    tr: {
      title: 'Keten Etüdü II',
      medium: '300 g/m² el yapımı kâğıt üzerine ceviz mürekkebi ve mineral yıkama',
      dimensions: '76 × 56 cm',
      description:
        'Doğal yırtma kenarlı el yapımı kâğıt üzerine samimi ve spontane fırça etüdü. Beyaz dişbudak çerçeve ve müze camı içinde yüzer şekilde çerçevelenmiştir.',
      story:
        'Londra’daki 2026 anıtsal galeri serisine hazırlık sürecinde üretilen araştırmacı bir ön çalışma.',
      priceNote: 'Fiyat bilgisi için iletişime geçin (özel çerçeve dahildir)',
    },
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
    tr: {
      title: 'Taşın Hafızası',
      medium: 'Kalın tuval üzerine grafit tozu, tebeşir ve yağlıboya çubuk',
      dimensions: '140 × 110 cm',
      description:
        'Kemik beyazı ve arduvaz grisi alt katmanları ortaya çıkaran güçlü kazıma yüzeyler. Fiziksel maddeselliğin çarpıcı bir ifadesi.',
      story:
        'Aşınmış cephelerin yüzyılların izlerini taşıdığı antik monolitik taş mimarilerden ilham almıştır.',
      priceNote: 'Özel Koleksiyon, Londra',
    },
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
    tr: {
      title: 'Botanik Fısıltı No. 7',
      medium: 'Keten tuval üzerine sap yeşili, ham sienna ve soğuk balmumu',
      dimensions: '120 × 90 cm',
      description:
        'Zarif organik formlar sıcak bej bir alan içinde belirir ve çözülür. Doğal döngülerin dingin ve şiirsel bir keşfi.',
      story:
        'Kuru tohum kozalarının kırağıya karşı heykelsi bir zarafet sergilediği kış bahçelerindeki yürüyüşlerin ardından üretildi.',
      priceNote: 'Fiyat bilgisi için iletişime geçin',
    },
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
    tr: {
      title: 'Simyasal Palet No. 1',
      medium: 'Belçika keteni üzerine saf kadmiyum, kobalt yıkama ve ceviz yağı',
      dimensions: '135 × 105 cm',
      description:
        'Geniş keten boşluklarla dengelenen canlı kromatik vurgular. Spatül impasto katmanları yarı saydam glazürlerle kontrast oluşturur.',
      story:
        'Ham mineral tozlarının elde karıştırılan ceviz yağlarıyla ışıltılı renk düzlemlerine dönüşümünü inceler.',
      priceNote: 'Fiyat bilgisi için iletişime geçin',
    },
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
    tr: {
      title: 'Gök Mavisi ve Tebeşir Rezonansı',
      medium: 'Kenevir tuval üzerine ultramarin pigmenti, ham sıva ve balmumu',
      dimensions: '160 × 130 cm',
      description:
        'Dokunsal tebeşir tozuyla etkileşime giren geniş gök mavisi ufuklar. Akdeniz kıyı ufuklarına bir saygı duruşu.',
      story:
        'Gökyüzü ile suyun tek bir ışıltılı düzlemde eridiği Ege Denizi’ne bakan yaz öğleden sonralarını anımsatır.',
      priceNote: 'Fiyat bilgisi için iletişime geçin',
    },
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
    tr: {
      title: 'Toprak Tonlarında Stüdyo Meditasyonu',
      medium: '300 g/m² pamuklu kâğıt üzerine yanık umber, arap zamkı ve mineral yıkama',
      dimensions: '80 × 60 cm',
      description:
        'Kalın krem rengi el yapımı kâğıt üzerinde süzülen lirik kaligrafik izler. Yansıma yapmayan UV korumalı müze camı ile çerçevelenmiştir.',
      story:
        'Şehir sesleri başlamadan önce sabahın erken saatlerindeki sessizlikte, saf bir sezgiyle resmedildi.',
      priceNote: 'Fiyat bilgisi için iletişime geçin (özel çerçeve dahildir)',
    },
  },
];

export function getLocalizedArtwork(artwork: Artwork, locale: Locale): Artwork {
  if (locale === 'tr' && artwork.tr) {
    return {
      ...artwork,
      title: artwork.tr.title,
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
