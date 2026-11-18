import type { Locale } from '@/i18n/translations';

export interface Exhibition {
  year: string;
  title: string;
  venue: string;
  city: string;
  type: 'Solo' | 'Group' | 'Art Fair';
}

export interface ArtistProfile {
  name: string;
  title: string;
  pronouns?: string;
  location: string;
  shortBio: string;
  artisticStatement: string;
  philosophy: {
    title: string;
    description: string;
  }[];
  process: string[];
  influences: string[];
  contact: {
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    whatsappNumber: string;
    whatsappUrl: string;
    studioVisitNote: string;
  };
  specialties: {
    title: string;
    description: string;
    mediums: string;
  }[];
  exhibitions: Exhibition[];
}

export const ARTIST_EN: ArtistProfile = {
  name: 'Kezban Tanlı',
  title: 'Contemporary Visual Artist & Painter',
  pronouns: 'she/her',
  location: 'Istanbul & London',
  shortBio:
    'Kezban Tanlı is an established visual artist whose practice bridges raw mineral matter, evocative color fields, and meditative stillness. Working primarily with natural earth pigments, cold beeswax, and Belgian linen, her paintings capture the tactile erosion of landscape and the quiet architecture of light.',
  artisticStatement:
    'My paintings are constructed as living surfaces—monuments to patience and sensory presence. By layering hand-ground raw ochres, limestone washes, and translucent oils, I seek to reveal the quiet dialogue between geological time and human vulnerability. Every canvas is an invitation to pause and breathe in the space between form and silence.',
  philosophy: [
    {
      title: 'Material Honesty & Raw Earth',
      description:
        'Working with unbleached linens, pure walnut oils, and natural earth pigments sourced from Anatolian riverbeds and mineral quarries. The substance of the material guides the mark.',
    },
    {
      title: 'Contemplative Spatial Tension',
      description:
        'Rejecting visual noise to give generous room to negative space. The unpainted threshold of raw linen holds as much emotional weight as the deepest impasto stroke.',
    },
    {
      title: 'Light as an Active Participant',
      description:
        'Micro-textures and mineral reflections cause each piece to shift naturally throughout the day, reacting dynamically to morning coolness and evening golden hours.',
    },
  ],
  process: [
    'Hand-stretching organic Belgian flax and raw hemp canvas over custom tulipwood bars.',
    'Formulating gesso grounds with crushed champagne chalk, rabbit-skin glue, and marble dust.',
    'Laying down spontaneous gestural strokes, followed by unhurried drying and reductive scraping.',
    'Sealing with matte damar and beeswax glazes that preserve deep light absorption without glare.',
  ],
  influences: [
    'Helen Frankenthaler — for lyricism, soak-staining spontaneity, and emotional luminosity.',
    'Antoni Tàpies — for structural matterism, textural reverence, and poetic austerity.',
    'Agnes Martin — for quiet monastic grids, spiritual peace, and sublime discipline.',
    'Cy Twombly — for vulnerable calligraphic mark-making and classical literary resonance.',
  ],
  contact: {
    email: 'studio@kezbantanli.art',
    instagramHandle: '@kezbantanli.art',
    instagramUrl: 'https://instagram.com/kezbantanli.art',
    whatsappNumber: '+90 532 123 4567',
    whatsappUrl: 'https://wa.me/905321234567',
    studioVisitNote:
      'Private studio visits in Istanbul and London are arranged by appointment. Worldwide insured art shipping is available for all original canvases.',
  },
  specialties: [
    {
      title: 'Monumental Oil on Belgian Linen',
      description:
        'Large-scale atmospheric compositions designed for high-ceiling architectural environments, private residences, and institutions.',
      mediums: 'Hand-ground oil, walnut oil, Belgian linen',
    },
    {
      title: 'Textural Earth & Mineral Abstraction',
      description:
        'Tactile multi-layered reliefs incorporating travertine dust, cold wax, and organic pigments with sculptural impasto depth.',
      mediums: 'Cold wax, raw pigments, marble dust, canvas',
    },
    {
      title: 'Site-Specific Custom Commissions',
      description:
        'Collaborative projects tailored in scale, emotional tone, and palette harmony for private collectors and curated interiors.',
      mediums: 'Custom palette & architectural scale studies',
    },
    {
      title: 'Intimate Deckled Paper & Ink Studies',
      description:
        'Immediate gestural works on 300gsm handmade deckled cotton paper and translucent Japanese washi.',
      mediums: 'Walnut ink, dry pigment, handmade deckled paper',
    },
  ],
  exhibitions: [
    {
      year: '2026',
      title: 'Resonance of Silence & Stone',
      venue: 'Galeri D’Art Moderne',
      city: 'Istanbul',
      type: 'Solo',
    },
    {
      year: '2025',
      title: 'Sublime Matter: Contemporary European Painting',
      venue: 'The Whitechapel Project Space',
      city: 'London',
      type: 'Group',
    },
    {
      year: '2024',
      title: 'Earth & Canvas: International Fine Art Exposition',
      venue: 'Palazzo delle Esposizioni',
      city: 'Venice',
      type: 'Art Fair',
    },
    {
      year: '2023',
      title: 'Horizons of Stillness',
      venue: 'Pavilion of Modern Arts',
      city: 'Basel',
      type: 'Group',
    },
  ],
};

export const ARTIST_TR: ArtistProfile = {
  ...ARTIST_EN,
  title: 'Çağdaş Görsel Sanatçı & Ressam',
  location: 'İstanbul & Londra',
  shortBio:
    'Kezban Tanlı; ham mineral dokuları, derinlikli renk alanlarını ve dingin bir tefekkürü bir araya getiren çağdaş bir görsel sanatçıdır. Doğal toprak pigmentleri, soğuk balmumu ve Belçika keteni ile ürettiği tablolarında doğanın dokunsal izlerini ve ışığın sessiz mimarisini tuvale taşır.',
  artisticStatement:
    'Tablolarım yaşayan yüzeyler olarak inşa edilir; sabrın ve duyusal farkındalığın anıtlarıdır. Elde öğütülmüş ham toprak boyalarını, kireçtaşı yıkamalarını ve yarı saydam yağlıboyaları katmanlandırarak jeolojik zaman ile insan duyarlılığı arasındaki sessiz diyaloğu görünür kılmayı amaçlıyorum. Her tuval, biçim ile sessizlik arasındaki boşlukta durup nefes almaya bir davettir.',
  contact: {
    ...ARTIST_EN.contact,
    studioVisitNote:
      'İstanbul ve Londra stüdyolarımıza özel ziyaretler randevu ile gerçekleştirilmektedir. Tüm orijinal eserler için dünya çapında sigortalı sanat eseri gönderimi mevcuttur.',
  },
  specialties: [
    {
      title: 'Belçika Keteni Üzerine Anıtsal Yağlıboya',
      description:
        'Yüksek tavanlı mimari mekânlar, özel konutlar ve kurumsal koleksiyonlar için tasarlanmış büyük ölçekli atmosferik kompozisyonlar.',
      mediums: 'Elde öğütülmüş yağlıboya, ceviz yağı, Belçika keteni',
    },
    {
      title: 'Dokusal Toprak & Mineral Soyutlama',
      description:
        'Traverten tozu, soğuk balmumu ve organik pigmentlerin heykelsi impasto derinliğiyle buluştuğu çok katmanlı dokunsal rölyefler.',
      mediums: 'Soğuk balmumu, ham pigmentler, mermer tozu, tuval',
    },
    {
      title: 'Mekâna Özel Sipariş Eserler',
      description:
        'Özel koleksiyonerler ve seçkin iç mekânlar için ölçek, duygusal ton ve renk paleti uyumuyla özel olarak kurgulanan ortak projeler.',
      mediums: 'Özel renk paleti & mimari ölçek etütleri',
    },
    {
      title: 'El Yapımı Kâğıt & Mürekkep Etütleri',
      description:
        '300 g/m² el yapımı pamuklu kâğıt ve yarı saydam Japon washi kâğıdı üzerine içten, spontane fırça çalışmaları.',
      mediums: 'Ceviz mürekkebi, kuru pigment, el yapımı kâğıt',
    },
  ],
};

export const ARTIST: ArtistProfile = ARTIST_EN;

export function getArtist(locale: Locale): ArtistProfile {
  return locale === 'tr' ? ARTIST_TR : ARTIST_EN;
}
