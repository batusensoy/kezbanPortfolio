---
name: frontend-design
description: >-
  Provides end-to-end frontend architecture, modern component design, responsive layout engineering,
  CSS/Tailwind best practices, and accessible web systems. Use when building UI components, structuring
  page layouts, implementing styling systems, and optimizing frontend performance.
---

# Frontend Design: Component Architecture & Web Systems

Modern frontend design bridges aesthetic vision with rock-solid software engineering: modular, composable, responsive, accessible, and performant.

---

## 1. Modern Component Architecture

### Principles:
1. **Single Responsibility**: Each component owns one discrete piece of the presentation or interaction. Separate container/data logic from visual presentation.
2. **Composition Over Configuration**: Prefer slot/children composition (`<Card><Card.Header /><Card.Body /></Card>`) over mega-props (`<Card title="..." subtitle="..." hasBadge={true} badgeText="..." />`).
3. **Semantic HTML First**: Always use native HTML elements (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<button>`, `<dialog>`) before defaulting to generic `<div>`.

```tsx
// Composable, semantic card component
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'article' | 'section' | 'div';
}

export function Card({ as: Component = 'article', className = '', children, ...props }: CardProps) {
  return (
    <Component
      className={`rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-all dark:border-zinc-800 dark:bg-zinc-900 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
```

---

## 2. Layout Engineering & Responsive Design

### 1. Mobile-First Fluid Breakpoints
- Structure layouts mobile-first: default styles apply to small screens; add `md:`, `lg:`, `xl:` as viewport expands.
- Use CSS `clamp()` and container queries (`@container`) for elements whose scale should reflect their container rather than viewport width.

```css
/* Responsive typography with clamp */
.fluid-heading {
  font-size: clamp(2rem, 5vw + 1rem, 4.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

### 2. Bento Grids & Asymmetric Layouts
```tsx
export function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px]">
      {children}
    </div>
  );
}
```

---

## 3. Web Accessibility (a11y) Standards

- **Interactive Elements**: Every clickable element must be a native `<button>` or `<a>` with a valid `href`.
- **Keyboard Navigation**: Ensure tab order matches visual reading order. Never remove `outline` without providing an accessible `:focus-visible` ring.
- **Labels & Alt Text**:
  - All icon buttons must provide `aria-label="Descriptive action"`.
  - All informative images must include descriptive `alt` text; decorative images must use `alt=""` and `aria-hidden="true"`.
- **Color Contrast**: Enforce WCAG AA standard (minimum 4.5:1 for normal text, 3:1 for large text).

---

## 4. Frontend Performance Checklist

- [ ] **Image Optimization**: Use WebP/AVIF formats with explicit `width` and `height` to prevent layout shifts.
- [ ] **Code Splitting**: Dynamically import heavy interactive dialogs, 3D canvases, or charting libraries using `React.lazy()` or Next.js `dynamic()`.
- [ ] **Font Loading**: Preload critical fonts with `font-display: swap` to minimize FOIT (Flash of Invisible Text).
- [ ] **Zero Cumulative Layout Shift (CLS)**: Reserve aspect ratio space for dynamic content.

