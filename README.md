# Kezban Tanli — Fine Art Portfolio & Studio

A bespoke, editorial, modern website for contemporary fine artist and visual painter **Kezban Tanli**. Engineered with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## 🎨 Content Management & Editing Guide (No Backend Required)

This website is deliberately built **frontend-only** without complex databases, logins, or CMS infrastructure. All content is stored in clean, centralized TypeScript files that automatically update the gallery, home page, and inquiry links.

---

### 1. How to Add a New Artwork

1. **Save your painting photograph**:
   - Save your image inside: `public/images/artworks/` (e.g. `public/images/artworks/morning-mist.jpg`).
   - *(You can also use an external image hosting URL like Unsplash or Cloudinary).*

2. **Open the artworks file**:
   - File path: `src/data/artworks.ts`

3. **Add a new artwork object** to the `ARTWORKS` array:
   ```typescript
   {
     id: 'art-10',
     slug: 'morning-mist-over-bosphorus',
     title: 'Morning Mist over Bosphorus',
     category: 'Atmospheric Landscapes', // Options: 'Oil on Canvas' | 'Abstract Expressionism' | 'Earth & Mineral' | 'Atmospheric Landscapes' | 'Paper Studies'
     year: '2026',
     medium: 'Oil and marble dust on Belgian linen',
     dimensions: '150 × 120 cm (59 × 47 in)',
     description: 'Luminous horizontal washes capturing early morning sea fog.',
     story: 'Conceived on the shores of the Bosphorus during a December dawn.',
     image: '/images/artworks/morning-mist.jpg', // or remote URL
     status: 'Available', // Options: 'Available' | 'Sold' | 'Reserved' | 'In Exhibition'
     featured: true, // true to display on Home page featured section
     priceNote: 'Price on request',
     orientation: 'portrait', // 'portrait' | 'landscape' | 'square'
   },
   ```

4. **Save the file**:
   - The new artwork will immediately appear in the gallery, will be filterable by category, and will automatically get its own dedicated artwork detail page at `/gallery/morning-mist-over-bosphorus`.

---

### 2. How to Edit Existing Artwork Information

To change a painting's title, price note, availability, or dimensions:
1. Open `src/data/artworks.ts`.
2. Find the artwork by its `slug` or `id`.
3. Change its properties (e.g., change `status: 'Available'` to `status: 'Sold'`).
4. Save the file. The status pill, collector notes, and inquiry buttons will automatically update.

---

### 3. How to Update Contact & Social Media Information

All artist contact info is centralized in a single file: `src/data/artist.ts`.

1. Open `src/data/artist.ts`.
2. Locate the `contact` block:
   ```typescript
   contact: {
     email: 'studio@kezbantanli.art',
     instagramHandle: '@kezbantanli.art',
     instagramUrl: 'https://instagram.com/kezbantanli.art',
     whatsappNumber: '+90 532 123 4567',
     whatsappUrl: 'https://wa.me/905321234567',
     studioVisitNote: 'Private studio visits in Istanbul and London are arranged by appointment.',
   },
   ```
3. Update your email, WhatsApp number, or Instagram username.
4. Save the file. The navigation, footer, contact form mailto generator, and WhatsApp buttons will automatically use your updated contact details.

---

### 4. How to Customize the Artist Biography, Statement & Exhibitions

Open `src/data/artist.ts` to customize:
- **`name` & `title`**: The artist's primary name and profession.
- **`artisticStatement`**: The hero statement and pullquotes featured on the Home and About pages.
- **`philosophy`**: The core conceptual pillars of your creative process.
- **`process`**: Studio rituals and material techniques.
- **`influences`**: Historical and contemporary artistic influences.
- **`exhibitions`**: Chronological list of solo exhibitions, group shows, and art fairs.

---

## 💻 Developer Commands

```bash
# Run local development server
npm run dev

# Run production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🏛️ Design & Architectural Principles

- **Palette**: Warm ivory (`#FAF8F5`), linen beige (`#F4EFEB`), deep charcoal (`#1C1B1A`), terracotta accents (`#B45A3C`).
- **Typography**: Playfair Display & Cormorant Garamond for editorial headings, Plus Jakarta Sans for high-legibility interface copy.
- **Interactions**: Emil Kowalski-inspired physics springs via Framer Motion. Zero layout shift.
- **Accessibility**: Semantic HTML5 elements (`<article>`, `<section>`, `<nav>`), WCAG AA contrast, keyboard focus rings.
- **Security**: Strict HTTP security headers in `next.config.js`, no client secret leakage, no unvalidated external redirects.
