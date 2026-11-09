# Domain Knowledge & Project Invariants

## Core Invariants
1. **Design Ethos**: Modern, tactile, editorial minimalism. Heavy reliance on typography, generous whitespace, subtle ambient lighting, and fluid spring physics.
2. **Performance Budget**: Target 95+ Google Lighthouse scores across Performance, Accessibility, Best Practices, and SEO. Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1).
3. **Accessibility**: All interactive elements must satisfy WCAG AA minimum standards (accessible names, contrast ratios $\ge$ 4.5:1, keyboard navigation parity).
4. **Motion System**: Hardware-accelerated transforms (`transform`, `opacity`, `filter`). Strictly respect `prefers-reduced-motion`.

