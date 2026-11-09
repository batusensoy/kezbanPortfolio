---
name: emil-kowalski
description: >-
  Provides advanced principles of micro-interactions, delightful UI animations, spring physics,
  fluid layout transitions, and interactive gesture feedback inspired by Emil Kowalski.
  Use when crafting fluid UI components, modal/drawer transitions, expandable widgets, and buttery animations.
---

# Emil Kowalski Style: Micro-Interactions & Fluid Motion

Inspired by the craft of Emil Kowalski (creator of Sonner, Vaul, and animations.dev), this skill establishes the principles of fluid, organic, tactile user interface motion on the web.

---

## 1. Core Principles of Fluid Interaction

1. **Springs Over Bezier for Direct Manipulation**:
   - For items moved by gestures or dynamic user input (drawers, dragging cards, tooltips), use physical spring simulations instead of static bezier curves.
   - For entry/exit transitions where duration must be predictable, use smooth bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
2. **Interruptibility**:
   - An animation must never lock the UI or ignore user intent. If a user clicks to close a modal halfway through its opening animation, it should reverse fluidly from its current velocity and position.
3. **Smooth Height & Layout Morphing**:
   - When expanding contents (e.g. accordion, tabs, command palettes, dynamic notifications), smoothly animate the container height rather than jumping or animating height with expensive repaints.
   - Use CSS `interpolate-size: allow-keywords` or Framer Motion `layout` / `AnimatePresence mode="popLayout"` with `ResizeObserver`.
4. **Contextual Scaling**:
   - Background scaling when a modal or sheet opens (e.g. Vaul drawer scaling down the background app view to `scale(0.95)` with `rounded-2xl` and a dark veil).

---

## 2. The Signature Easing & Spring Tokens

```typescript
// Emil-grade motion configurations (for Framer Motion or CSS)
export const MOTION_TRANSITIONS = {
  // Snappy, organic spring for buttons, icons, switches
  snappySpring: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  },
  // Soft, physical spring for dialogs, drawers, cards
  smoothSpring: {
    type: 'spring',
    stiffness: 300,
    damping: 32,
  },
  // Bouncy spring for playful confirmations, badges, checkmarks
  bouncySpring: {
    type: 'spring',
    stiffness: 500,
    damping: 25,
  },
  // High-performance smooth bezier for layout morphs
  emilBezier: [0.16, 1, 0.3, 1] as const,
};
```

---

## 3. Micro-Interaction Patterns

### 1. Tactile Button Tap
- Hover: subtle brightness or soft scale (`scale(1.02)`).
- Active (press): instant compression (`scale(0.96)` or `scale(0.97)`), damping `15`.
- Release: immediate spring back.

### 2. Smooth Height Morph (Sonner / Dynamic Card)
```tsx
import { motion, AnimatePresence } from 'framer-motion';

export function DynamicMorphContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={/* active key */}
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
```

### 3. Gesture-Driven Drawer (Vaul Pattern)
- Track drag displacement velocity.
- If pulled past threshold or flicked downwards with sufficient velocity, dismiss cleanly.
- Dim backdrop linearly with drag percentage.

---

## 4. Craft Checklist

- [ ] Does every opening modal have an accompanying exit animation that matches in feel?
- [ ] Is `prefers-reduced-motion` respected by turning off translation/scaling while keeping opacity fades?
- [ ] Are animations hardware-accelerated (`transform`, `opacity`, `filter`) without triggering layout reflows (`width`, `height`, `top`, `margin`)?

