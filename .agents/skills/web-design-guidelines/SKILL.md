---
name: web-design-guidelines
description: >-
  Provides comprehensive modern web design guidelines, responsive layout grids, typographic scales,
  color contrast standards, and Web Vitals performance benchmarks. Use when establishing design systems,
  configuring stylesheets, auditing responsiveness, or styling multi-page websites.
---

# Web Design Guidelines: Comprehensive Modern Standards

This skill documents foundational guidelines for modern, accessible, responsive, and performant web design.

---

## 1. Breakpoint & Grid System

Follow standard fluid responsive breakpoints:

| Token | Breakpoint | Typical Device | Container Max Width |
| :--- | :--- | :--- | :--- |
| `xs` | `< 640px` | Mobile portrait | `100%` (with `px-4`) |
| `sm` | `640px` | Large phones / small tablets | `640px` |
| `md` | `768px` | Tablets portrait | `768px` |
| `lg` | `1024px` | Tablets landscape / Laptops | `1024px` |
| `xl` | `1280px` | Standard Desktop | `1280px` |
| `2xl`| `1536px` | Large Monitors / Ultrawide | `1440px` (clamped) |

### Page Layout Structure:
```html
<div class="min-h-screen flex flex-col bg-canvas text-primary">
  <header class="sticky top-0 z-40 w-full backdrop-blur border-b border-subtle">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Nav Content -->
    </div>
  </header>
  <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
    <!-- Main Content -->
  </main>
  <footer class="border-t border-subtle py-8 text-center text-sm text-secondary">
    <!-- Footer Content -->
  </footer>
</div>
```

---

## 2. Modular Typographic Scale

Establish a consistent mathematical typographic scale (Major Third: 1.25 or Perfect Fourth: 1.333):

```css
:root {
  --font-xs: 0.75rem;    /* 12px - Footnotes, micro-badges */
  --font-sm: 0.875rem;   /* 14px - UI labels, secondary metadata */
  --font-base: 1rem;     /* 16px - Body default */
  --font-lg: 1.125rem;   /* 18px - Lead paragraphs */
  --font-xl: 1.25rem;    /* 20px - Subheadings / Card titles */
  --font-2xl: 1.5rem;    /* 24px - Section headers */
  --font-3xl: 1.875rem;  /* 30px - Major headers */
  --font-4xl: 2.25rem;   /* 36px - Page titles */
  --font-5xl: 3rem;      /* 48px - Hero display titles */
  --font-6xl: 3.75rem;   /* 60px - Editorial hero typography */
}
```

---

## 3. Elevation & Depth Tokens

Depth should be soft, realistic, and layered:

```css
/* Multi-layered soft ambient shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04);
--shadow-glow: 0 0 40px -10px var(--accent-glow);
```

---

## 4. Core Web Vitals Targets

Every web design must satisfy the Google Core Web Vitals standards:
- **LCP (Largest Contentful Paint)**: $\le 2.5\text{s}$
  - Optimize hero images, use Next/Image or priority preloads.
- **INP (Interaction to Next Paint)**: $\le 200\text{ms}$
  - Keep main thread idle; offload heavy computations; avoid heavy sync JavaScript on clicks.
- **CLS (Cumulative Layout Shift)**: $\le 0.1$
  - Always reserve width and height or aspect-ratio on images, videos, and dynamic embeds.

