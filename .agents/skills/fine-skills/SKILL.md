---
name: fine-skills
description: >-
  Provides fine-tuned craftsmanship standards, micro-craft details, and pixel-level polish
  for engineering and design. Use when refining UI components, tuning subtle interactions,
  polishing visual balance, and ensuring precision in implementation.
---

# Fine Skills: Micro-Craftsmanship & Polish

Fine skills embody the difference between software that merely works and software that feels distinctly handcrafted, robust, and delightful. Every surface, transition, margin, and edge case is treated with intentionality.

---

## 1. Core Principles of Fine Craft

1. **Subpixel & Optical Balance**: Geometric centering does not always equal optical centering. Icons, badges, and typography must be optically aligned with adjacent elements.
2. **State Continuity**: Never leave an element in a dead state. Every interactive element must gracefully reflect default, hover, active/pressed, focused-visible, disabled, and loading states.
3. **Intentional Hierarchy**: Visual weight must guide the eye naturally:
   - Primary: High contrast, prominent position, elevated elevation or accent color.
   - Secondary: Muted border or soft tint, clear label.
   - Tertiary / Ghost: Minimal container footprint until hovered.
4. **Resilience to Variance**: Elements must render cleanly with 1 character, 100 characters, missing avatars, slow network, or extreme viewports.

---

## 2. Micro-Level Execution Checklist

### Typography & Spacing
- [ ] Use `ch` or max-width clamps (`max-w-prose` / `65ch`) on editorial text to prevent illegible line lengths.
- [ ] Enforce negative margin compensations for icon stroke alignment (`-ml-0.5` or optical offset).
- [ ] Align text baselines rather than center boxes when pairing labels with small caps or badges.
- [ ] Prevent typographical widows/orphans in headings using `text-wrap: balance` or `text-wrap: pretty`.
- [ ] Ensure tabular numbers (`font-variant-numeric: tabular-nums` or `tabular-nums`) for currency, timers, counters, and statistics.

### Interactive Micro-States
- [ ] **Focus rings**: Provide unambiguous, accessible focus rings that follow `outline-offset: 2px` and avoid clipping under `overflow: hidden` containers.
- [ ] **Click dampening**: Active states should feel tactile (e.g., `scale-[0.98]` or a slight brightness decrease) with zero lag.
- [ ] **Cursors**: Set `cursor-pointer` only on interactive items, `cursor-not-allowed` on disabled states, and `cursor-default` where text selection is disabled.
- [ ] **Text Selection**: Disable text selection (`select-none`) on drag handles, buttons, and iconography.

### Micro-Transitions
```css
/* Subtle micro-interaction transition tokens */
--ease-out-quad: cubic-bezier(0.25, 1, 0.5, 1);
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
--duration-instant: 100ms;
--duration-fast: 150ms;
--duration-smooth: 240ms;
```

---

## 3. Implementation Workflow

1. **Audit Component Bounds**: Inspect bounding boxes with DevTools. Eliminate accidental margin collapses, phantom padding, or subpixel bleeding.
2. **Handle Empty & Error States**: Design empty states that feel intentional with subtle illustrations, supportive copy, and clear recovery actions.
3. **Skeleton & Shimmer Harmony**: Match skeleton loader dimensions exactly to the real component heights to eliminate Cumulative Layout Shift (CLS).
4. **Haptic & Visual Feedback**: Pair destructive or irreversible actions with clear confirmations and distinct warning color tokens (`red-600` / `rose-500`).

