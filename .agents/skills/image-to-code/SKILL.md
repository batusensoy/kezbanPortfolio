---
name: image-to-code
description: >-
  Translates visual screenshots, Figma designs, wireframes, and UI mockups into clean, production-grade
  JSX, HTML, Tailwind CSS, and React components. Use when converting design images into responsive,
  accessible, and pixel-accurate frontend code.
---

# Image to Code: Visual Deconstruction & Pixel-Accurate Translation

This skill establishes a systematic protocol for deconstructing visual mockups, UI screenshots, or design assets and transforming them into semantic, responsive, accessible code.

---

## 1. The 6-Step Visual Deconstruction Workflow

```
[1. Macro Layout & Grid] ──► [2. Palette & Contrast] ──► [3. Typography Hierarchy]
            │                              │                           │
            ▼                              ▼                           ▼
[4. Spacing & Radius]   ──► [5. Component Semantics] ──► [6. Responsive Collapse]
```

### Step 1: Macro Layout & Grid
- Identify parent containers: Is it a 12-column grid, CSS flex row, asymmetric bento layout, or stacked column?
- Determine boundary constraints: Is there a `max-w-6xl` or full-bleed background?
- Note fixed/sticky elements (navbars, sidebars, floating action buttons).

### Step 2: Palette & Contrast Extraction
- Identify:
  - Background canvas (`bg-slate-900`, `bg-zinc-50`, `#f8f9fa`)
  - Primary text vs secondary muted text (`text-zinc-900` vs `text-zinc-500`)
  - Accent / CTA colors (`#3b82f6`, `#10b981`)
  - Border and divider tones (`border-black/5`, `border-white/10`)
- Ensure contrast ratio meets WCAG AA standards (4.5:1 minimum).

### Step 3: Typography Hierarchy
- Estimate font sizing and weights:
  - Hero display: `text-4xl md:text-6xl font-extrabold tracking-tight`
  - Section heading: `text-2xl md:text-3xl font-bold`
  - Body paragraph: `text-base text-zinc-600 dark:text-zinc-400 leading-relaxed`
  - Micro-badge / eyebrow: `text-xs font-semibold uppercase tracking-wider`

### Step 4: Spacing, Radii & Depth
- Match corner radius: Subtle (`rounded-lg`), modern medium (`rounded-xl` / `rounded-2xl`), pill (`rounded-full`).
- Match shadows: Ambient blur (`shadow-sm`, `shadow-md`, `shadow-2xl`).
- Measure padding & gaps using the 4px/8px standard scale (`gap-4`, `p-6`, `py-12`).

### Step 5: Semantic Component Mapping
- Replace generic `div`s with semantic equivalents: `<header>`, `<nav>`, `<main>`, `<article>`, `<button>`, `<a>`.
- Map icons to Lucide, Heroicons, or SVG icons matching visual weight and stroke width.

### Step 6: Responsive Breakdown
- How does the layout adapt on mobile?
  - Multi-column grids become `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
  - Horizontal navbars collapse into a hamburger or bottom sheet.
  - Padding shrinks from `px-8 py-16` to `px-4 py-8`.

---

## 2. Translation Quality Checklist

When reviewing code generated from visual references:
- [ ] **Pixel & Proportional Harmony**: Do element ratios match the screenshot?
- [ ] **No Hardcoded Magic Pixels**: Use Tailwind or CSS variables instead of ad-hoc values like `w-[327.4px]`.
- [ ] **Interactive States**: Did you implement hover, active, and focus states that match the visual style?
- [ ] **Accessible HTML**: Are buttons actual `<button>` elements, links actual `<a href>`, and images equipped with descriptive `alt` attributes?
- [ ] **Clean Code Output**: Is the JSX modular, readable, and free of redundant wrapper `div`s?

