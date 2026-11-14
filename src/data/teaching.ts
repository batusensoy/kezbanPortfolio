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
   * Keep as "Contact for Pricing" or replace with your actual studio rate
   * (e.g. "£XX / hour" or "£XXX per 4-session block").
   */
  ratePlaceholder: string;
  rateNote: string;
}

export const TEACHING_OFFERINGS: TeachingOffering[] = [
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

export const TEACHING_ARRANGEMENTS = [
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

