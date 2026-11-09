---
name: taste
description: >-
  Guides aesthetic discernment, editorial visual hierarchy, typography harmony, color discipline,
  and deliberate restraint. Use when designing user interfaces, creative portfolios, marketing pages,
  or high-end web products requiring cultured visual elegance.
---

# Taste: Aesthetic Discernment & Design Discipline

Good taste is intentional reduction, harmonic tension, and confident restraint. It is knowing what to remove until only the essential and breathtaking remains.

---

## 1. Principles of Elevated Taste

1. **Restraint Over Excess**: Resist the temptation to add gradients, 3D borders, drop shadows, and neon glows all in one place. Choose one hero visual technique and let whitespace do the rest.
2. **Typography as Voice**: Typography carries 80% of visual personality.
   - Pair an expressive, editorial serif or crisp modernist grotesque display typeface with an invisible, highly legible geometric or neo-grotesque sans-serif body.
   - Maintain strict optical hierarchy: Headline, deck/subhead, body, caption, overline/eyebrow.
   - Respect typographic line-height: tighter on large titles (`leading-[1.1]`), generous on body text (`leading-relaxed` / `1.6-1.75`).
3. **Harmonic Monochromatic Gradients & Colors**:
   - Don't saturate everything. Let 90% of the UI live in muted, neutral tones (deep slates, warm zincs, soft off-whites).
   - Use vibrant accent colors with surgical precision for calls-to-action and primary indicators.
4. **The Power of Asymmetry & Generous Whitespace**:
   - Symmetrical layouts can feel sterile or robotic. Introduce controlled tension through intentional grid breaks, staggered offsets, and varied card scales.
   - Double your margins. Give hero statements room to breathe.

---

## 2. Palette & Contrast Architecture

```css
/* Cultured, modern dark/light contrast tokens */
:root {
  /* Warm stone light theme */
  --bg-canvas: #fcfbf9;
  --bg-surface: #ffffff;
  --text-primary: #121212;
  --text-secondary: #575653;
  --border-subtle: rgba(0, 0, 0, 0.08);
  --accent: #2563eb;
}

[data-theme='dark'] {
  /* Rich obsidian dark theme (avoid pure #000000 unless OLED pure luxury) */
  --bg-canvas: #090a0c;
  --bg-surface: #121418;
  --text-primary: #f2f4f8;
  --text-secondary: #8e95a5;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --accent: #38bdf8;
}
```

---

## 3. Visual Taste Checklist

- [ ] **Rhythm**: Does vertical rhythm adhere to consistent multiples (4px/8px grid)?
- [ ] **Contrast Integrity**: Do subtle borders define cards without shouting? (e.g., `border-black/5 dark:border-white/10`).
- [ ] **Layering & Depth**: Is elevation achieved with subtle atmospheric blurs (`backdrop-blur-md bg-white/70 dark:bg-zinc-900/70`) and soft ambient shadows (`shadow-sm` or `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`) rather than heavy black drops?
- [ ] **Micro-Delight**: Are accents (avatars, badges, status dots) crafted with high-definition styling (e.g., ring halos, subtle inner borders)?

