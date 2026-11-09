---
name: awesome-design
description: >-
  Provides cutting-edge modern design patterns: Bento grids, animated gradient borders, subtle glassmorphism,
  noise overlays, interactive hover beams, and marquee tickers. Use when building visually striking portfolios,
  high-end landing pages, or award-winning UI interfaces.
---

# Awesome Design: Modern Visual Patterns & Creative Aesthetics

Awesome Design curates high-end visual treatments and interactive patterns that make modern websites feel premium, futuristic, and memorable.

---

## 1. Bento Grid Architecture

Bento grids organize diverse content (stats, previews, quotes, code, graphics) into an asymmetric, harmonious layout:

```tsx
export function BentoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto p-4">
      {/* Hero Bento Card - Spans 2 cols */}
      <div className="md:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 text-white">
        <h3 className="text-2xl font-bold">Featured Portfolio Project</h3>
        <p className="mt-2 text-zinc-400">Full-stack web application with real-time sync.</p>
        <div className="mt-6 h-48 rounded-xl bg-zinc-800/60 border border-white/5" />
      </div>

      {/* Metric Bento Card */}
      <div className="flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-900">
        <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Performance</span>
        <div className="text-5xl font-black tracking-tight text-blue-600 dark:text-blue-400">99.8%</div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Core Web Vitals average score across all devices.</p>
      </div>

      {/* Interactive Tooling Card */}
      <div className="rounded-3xl border border-zinc-200/80 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-900">
        <h4 className="font-semibold text-lg">Tech Stack</h4>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Postgres'].map(tech => (
            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Wide Showcase Card - Spans 2 cols */}
      <div className="md:col-span-2 rounded-3xl border border-zinc-200/80 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-900">
        <h4 className="font-semibold text-lg">Global Reach</h4>
        <p className="mt-1 text-sm text-zinc-500">Delivering digital experiences across 4 continents.</p>
      </div>
    </div>
  );
}
```

---

## 2. Animated Gradient Border & Glow Effect

Create modern glowing card borders using CSS `radial-gradient` tracking the mouse pointer:

```tsx
import { useState } from 'react';

export function GlowingCard({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

---

## 3. Subtle Film Grain & Noise Overlay

Give digital flat surfaces organic tactile texture with an SVG noise filter:

```html
<svg class="pointer-events-none fixed isolate z-50 opacity-[0.035] mix-blend-overlay w-full h-full inset-0">
  <filter id="noiseFilter">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
</svg>
```

---

## 4. Modern Marquee / Ticker

Infinite continuous loop of logos, tech stacks, or client reviews:

```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
```

