import type { Locale } from '@/i18n/translations';

export interface TeachingOffering {
  id: string;
  title: string;
  eyebrow: string;
  audience: string;
  shortDescription: string;
  fullDescription: string;
  keyFocusAreas: string[];
  sessionFormat: string;
  recommendedDuration: string;
  /**
   * Editable rate placeholder.
   * Keep as "Contact for Pricing" / "Fiyat Bilgisi İçin İletişime Geçin" or replace with your actual studio rate.
   */
  ratePlaceholder: string;
  rateNote: string;
}

export const TEACHING_OFFERINGS_EN: TeachingOffering[] = [
  {
    id: 'beginners-hobbyists',
    title: 'Beginners & Hobbyists',
    eyebrow: 'Personal Creativity & Foundations',
    audience: 'Complete beginners, returning creatives & leisure painters of all ages',
    shortDescription:
      'Learning painting, drawing, and creativity for personal enjoyment in a calm, encouraging studio environment.',
    fullDescription:
      'Designed for individuals who wish to explore drawing and painting for personal fulfillment without academic pressure. Sessions move at your natural pace, demystifying materials and building confidence in observational sketching, color mixing, and expressive brushwork.',
    keyFocusAreas: [
      'Fundamental drawing techniques: line, tone, proportion, and perspective',
      'Introduction to oil, acrylic, watercolor, and dry media',
      'Color theory, harmonious palette mixing, and brush handling',
      'Finding personal creative rhythm and overcoming the blank canvas',
    ],
    sessionFormat: '1-to-1 private studio tuition or online live sessions',
    recommendedDuration: '60 or 90 minutes per session (flexible weekly or fortnightly)',
    ratePlaceholder: 'Contact for Pricing',
    rateNote: 'Single taster sessions and multi-lesson introductory blocks available upon enquiry.',
  },
  {
    id: 'artistic-development',
    title: 'Artistic Development',
    eyebrow: 'Technical Mastery & Studio Practice',
    audience: 'Intermediate to advanced painters & practising visual artists',
    shortDescription:
      'Improving painting, drawing, and technical skills while refining your personal visual language.',
    fullDescription:
      'Tailored mentorship for artists looking to deepen their technical command and conceptual clarity. Whether you want to master glazing, cold wax and mineral impasto, large-scale composition, or transition from studies into a cohesive body of work, tuition is adapted to your artistic goals.',
    keyFocusAreas: [
      'Advanced surface preparation, natural pigments, cold wax, and oil layering',
      'Structural composition, spatial tension, and tonal control',
      'Developing a cohesive series and authentic visual identity',
      'Constructive studio critique and overcoming technical plateaus',
    ],
    sessionFormat: '1-to-1 studio mentorship (Istanbul / London) or online portfolio reviews',
    recommendedDuration: '90 or 120 minutes per studio session',
    ratePlaceholder: 'Contact for Pricing',
    rateNote: 'Tailored to session length, studio material requirements, and mentorship frequency.',
  },
  {
    id: 'gcse-art-preparation',
    title: 'GCSE Art Preparation',
    eyebrow: 'Academic Coursework & Exam Support',
    audience: 'Secondary school students (Years 10–11) & parents seeking structured guidance',
    shortDescription:
      'Guidance with coursework, sketchbooks, artist research, and examination projects.',
    fullDescription:
      'Structured, encouraging tuition aligned with GCSE Art & Design assessment objectives. Students receive practical guidance on building rich, investigative sketchbooks, experimenting thoughtfully with media, connecting contextual artist research to their own work, and executing ambitious final exam pieces.',
    keyFocusAreas: [
      'Sketchbook development, visual storytelling, and annotation clarity',
      'Sustained observational drawing and media experimentation across assessment objectives',
      'Meaningful contextual studies and responding to historical/contemporary artists',
      'Planning and executing the Externally Set Assignment (exam project) with confidence',
    ],
    sessionFormat: '1-to-1 tuition (in-person or online) with regular progress updates for parents',
    recommendedDuration: '60 or 90 minutes weekly during term time or holiday intensives',
    ratePlaceholder: 'Contact for Pricing',
    rateNote: 'Termly support packages and individual coursework review sessions available.',
  },
  {
    id: 'art-school-university-preparation',
    title: 'Art School & University Preparation',
    eyebrow: 'Portfolio Curation & Admissions Mentorship',
    audience: 'A-Level, IB, Foundation Diploma & Undergraduate/Postgraduate Fine Art applicants',
    shortDescription:
      'Developing distinctive artistic portfolios and preparing applications for leading art schools and universities.',
    fullDescription:
      'Comprehensive mentorship for students applying to Foundation courses, BA (Hons) Fine Art, Architecture, or related creative degrees in the UK, Europe, and internationally. Focus is placed on cultivating independent artistic inquiry, curating a compelling physical and digital portfolio, and preparing for admissions interviews.',
    keyFocusAreas: [
      'Creating ambitious, self-directed studio work that demonstrates independent thinking',
      'Editing, sequencing, and photographing work for digital and physical portfolio submissions',
      'Personal statement guidance and articulating artistic intentions clearly',
      'Mock interview preparation and critical discussion of your portfolio',
    ],
    sessionFormat: '1-to-1 mentorship, portfolio critiques, and application strategy sessions',
    recommendedDuration: '90 or 120 minutes per session',
    ratePlaceholder: 'Contact for Pricing',
    rateNote: 'Available as individual portfolio critiques or full application-cycle mentorship.',
  },
];

export const TEACHING_OFFERINGS_TR: TeachingOffering[] = [
  {
    id: 'beginners-hobbyists',
    title: 'Başlangıç & Hobi Sanatçıları',
    eyebrow: 'Kişisel Yaratıcılık & Temel Eğitim',
    audience: 'Her yaştan yeni başlayanlar, sanata dönmek isteyenler ve hobi amaçlı resim tutkunları',
    shortDescription:
      'Sakin ve teşvik edici bir stüdyo ortamında kişisel keyif için resim, çizim ve yaratıcılık dersleri.',
    fullDescription:
      'Akademik bir baskı olmadan çizim ve resmi kişisel tatmin için keşfetmek isteyenler için tasarlanmıştır. Dersler kendi doğal hızınızda ilerler; malzemeleri tanımanızı, gözleme dayalı eskiz yapmayı, renk karıştırmayı ve özgün fırça kullanımında özgüven kazanmanızı sağlar.',
    keyFocusAreas: [
      'Temel çizim teknikleri: çizgi, ton, oran-orantı ve perspektif',
      'Yağlıboya, akrilik, suluboya ve kuru teknik malzemelere giriş',
      'Renk teorisi, uyumlu palet oluşturma ve fırça hakimiyeti',
      'Kişisel yaratıcı ritmi bulma ve boş tuval heyecanını aşma',
    ],
    sessionFormat: 'Bire bir özel stüdyo dersi veya çevrimiçi (online) canlı dersler',
    recommendedDuration: 'Ders başına 60 veya 90 dakika (esnek haftalık veya iki haftada bir)',
    ratePlaceholder: 'Fiyat Bilgisi İçin İletişime Geçin',
    rateNote: 'Talebe göre tek seferlik tanışma dersleri veya çoklu başlangıç paketleri mevcuttur.',
  },
  {
    id: 'artistic-development',
    title: 'Sanatsal Gelişim',
    eyebrow: 'Teknik Uzmanlık & Stüdyo Pratiği',
    audience: 'Orta ve ileri seviye ressamlar ile pratiğini geliştirmek isteyen görsel sanatçılar',
    shortDescription:
      'Kişisel görsel dilinizi olgunlaştırırken resim, çizim ve teknik becerilerinizi ileri taşıyın.',
    fullDescription:
      'Teknik hakimiyetini ve kavramsal derinliğini artırmak isteyen sanatçılar için özel mentorluk. Glazür teknikleri, soğuk balmumu ve mineral impasto, büyük ölçekli kompozisyon veya eskizlerden bütüncül bir seriye geçiş gibi hedeflerinize göre şekillendirilir.',
    keyFocusAreas: [
      'İleri düzey yüzey hazırlığı, doğal pigmentler, soğuk balmumu ve yağlıboya katmanları',
      'Yapısal kompozisyon, mekânsal denge ve ton kontrolü',
      'Bütüncül bir eser serisi ve özgün sanatsal kimlik geliştirme',
      'Yapıcı stüdyo kritikleri ve teknik tıkanıklıkları aşma yöntemleri',
    ],
    sessionFormat: 'Bire bir stüdyo mentorluğu (İstanbul / Londra) veya çevrimiçi portfolyo değerlendirmesi',
    recommendedDuration: 'Stüdyo seansı başına 90 veya 120 dakika',
    ratePlaceholder: 'Fiyat Bilgisi İçin İletişime Geçin',
    rateNote: 'Ders süresine, stüdyo malzeme gereksinimlerine ve mentorluk sıklığına göre belirlenir.',
  },
  {
    id: 'gcse-art-preparation',
    title: 'GCSE Sanat Hazırlığı',
    eyebrow: 'Akademik Ödev & Sınav Desteği',
    audience: 'Ortaöğretim öğrencileri (10–11. Sınıflar) ve yapılandırılmış rehberlik arayan veliler',
    shortDescription:
      'Okul projeleri, eskiz defterleri (sketchbook), sanatçı araştırmaları ve sınav projeleri için bire bir rehberlik.',
    fullDescription:
      'GCSE Art & Design değerlendirme kriterleriyle uyumlu, yapılandırılmış ve motive edici dersler. Öğrencilere zengin ve araştırmacı eskiz defterleri hazırlama, farklı malzemelerle özgün denemeler yapma, sanat tarihi araştırmalarını kendi işleriyle ilişkilendirme ve final sınav projelerini özgüvenle tamamlama konularında pratik destek sunulur.',
    keyFocusAreas: [
      'Eskiz defteri (sketchbook) geliştirme, görsel anlatım ve açıklama netliği',
      'Değerlendirme kriterlerine uygun gözlemsel çizim ve malzeme deneyleri',
      'Anlamlı sanatçı araştırmaları ve tarihsel/çağdaş eserlere görsel yanıt üretme',
      'Final sınav projesini (Externally Set Assignment) özgüvenle planlama ve uygulama',
    ],
    sessionFormat: 'Veliler için düzenli gelişim bilgilendirmesi içeren bire bir dersler (yüz yüze veya online)',
    recommendedDuration: 'Dönem içinde haftalık 60 veya 90 dakika ya da tatil dönemi yoğunlaştırılmış programlar',
    ratePlaceholder: 'Fiyat Bilgisi İçin İletişime Geçin',
    rateNote: 'Dönemlik destek paketleri ve bireysel proje değerlendirme seansları mevcuttur.',
  },
  {
    id: 'art-school-university-preparation',
    title: 'Güzel Sanatlar & Üniversite Hazırlığı',
    eyebrow: 'Portfolyo Kürasyonu & Başvuru Mentorluğu',
    audience: 'A-Level, IB, Foundation ve Lisans / Yüksek Lisans Güzel Sanatlar adayları',
    shortDescription:
      'Önde gelen sanat okulları ve üniversite başvuruları için özgün sanatsal portfolyo hazırlığı.',
    fullDescription:
      'Türkiye, İngiltere, Avrupa ve uluslararası düzeyde Güzel Sanatlar, Mimarlık, Tasarım ve Foundation programlarına başvuran öğrenciler için kapsamlı mentorluk. Bağımsız sanatsal araştırma becerisi kazandırma, etkileyici bir fiziksel ve dijital portfolyo kurgulama ve kabul mülakatlarına hazırlık üzerine odaklanır.',
    keyFocusAreas: [
      'Bağımsız düşünceyi yansıtan iddialı ve özgün stüdyo çalışmaları üretme',
      'Dijital ve fiziksel portfolyo başvuruları için eser seçimi, sıralama ve fotoğraflama',
      'Niyet mektubu (Personal Statement) rehberliği ve sanatsal vizyonu ifade etme',
      'Mülakat provaları ve portfolyo üzerine eleştirel sunum pratiği',
    ],
    sessionFormat: 'Bire bir mentorluk, portfolyo kritikleri ve başvuru stratejisi seansları',
    recommendedDuration: 'Seans başına 90 veya 120 dakika',
    ratePlaceholder: 'Fiyat Bilgisi İçin İletişime Geçin',
    rateNote: 'Tekil portfolyo değerlendirmesi veya tam başvuru dönemi mentorluğu olarak sunulur.',
  },
];

export const TEACHING_ARRANGEMENTS_EN = [
  {
    title: 'Personal Consultation',
    description:
      'Every student begins with an informal conversation (by email, phone, or WhatsApp) to discuss current experience, creative goals, and preferred learning pace.',
  },
  {
    title: 'Flexible Scheduling',
    description:
      'Lesson times are arranged directly with Kezban to suit your timetable, whether you prefer regular weekly sessions, weekend slots, or school-holiday intensives.',
  },
  {
    title: 'Direct Payment Arrangements',
    description:
      'There are no automated checkout systems or third-party platform fees. Lesson fees and block bookings are confirmed and settled directly with the artist.',
  },
];

export const TEACHING_ARRANGEMENTS_TR = [
  {
    title: 'Kişisel Ön Görüşme',
    description:
      'Her öğrenci; mevcut deneyimini, yaratıcı hedeflerini ve tercih ettiği çalışma temposunu konuşmak üzere (e-posta, telefon veya WhatsApp üzerinden) samimi bir ön görüşme ile başlar.',
  },
  {
    title: 'Esnek Ders Programı',
    description:
      'İster düzenli haftalık dersler, ister hafta sonu saatleri veya okul tatili yoğunlaştırılmış programları olsun; ders saatleri takviminize uyacak şekilde doğrudan Kezban ile planlanır.',
  },
  {
    title: 'Doğrudan Ödeme Planlaması',
    description:
      'Otomatik ödeme sistemleri veya aracı platform komisyonları yoktur. Ders ücretleri ve paket programlar doğrudan sanatçı ile teyit edilerek gerçekleştirilir.',
  },
];

export const TEACHING_OFFERINGS = TEACHING_OFFERINGS_EN;
export const TEACHING_ARRANGEMENTS = TEACHING_ARRANGEMENTS_EN;

export function getTeachingOfferings(locale: Locale): TeachingOffering[] {
  return locale === 'tr' ? TEACHING_OFFERINGS_TR : TEACHING_OFFERINGS_EN;
}

export function getTeachingArrangements(locale: Locale) {
  return locale === 'tr' ? TEACHING_ARRANGEMENTS_TR : TEACHING_ARRANGEMENTS_EN;
}
