---
name: framer-motion
description: >-
  Provides comprehensive patterns for Framer Motion in React: declarative animations,
  layout transitions, shared layout animations (layoutId), gesture interactions, scroll physics,
  and bundle size optimization with LazyMotion. Use when crafting interactive animations in React.
---

# Framer Motion: Declarative Animations & Layout Transitions

Framer Motion is the production standard for declarative animation and gesture systems in React. This skill details patterns for fluid motion, shared layout transitions, performance optimization, and accessible interactions.

---

## 1. Fundamentals & Variants Architecture

Always extract complex animation states into structured `variants`. This separates visual design from component logic and coordinates staggered child transitions cleanly.

```tsx
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 28,
    },
  },
};

export function AnimatedList({ items }: { items: string[] }) {
  return (
    <motion.ul variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
      {items.map((item, i) => (
        <motion.li key={i} variants={itemVariants} className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800">
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

---

## 2. Shared Layout Transitions (`layoutId`)

Use `layoutId` for Apple-grade morphing between different components (e.g., active tabs pill, thumbnail to full modal, card expansions):

```tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const TABS = ['Overview', 'Projects', 'Experience', 'Contact'];

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="flex gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className="relative px-4 py-1.5 text-sm font-medium transition-colors"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTabPill"
              className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-full shadow-sm"
              transition={{ type: 'spring', stiffness: 450, damping: 32 }}
            />
          )}
          <span className="relative z-10 text-zinc-900 dark:text-zinc-100">{tab}</span>
        </button>
      ))}
    </div>
  );
}
```

---

## 3. Gestures & Drag Physics

Leverage `whileHover`, `whileTap`, and `drag` with strict constraints:

```tsx
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:shadow-lg"
>
  Explore Portfolio
</motion.button>
```

---

## 4. Scroll-Linked Animations & Transforms

```tsx
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 origin-left z-50"
    />
  );
}
```

---

## 5. Bundle Optimization: `LazyMotion`

The full `framer-motion` package can be ~30KB gzipped. For production performance, wrap your app root with `LazyMotion` and use the `m` component with `domAnimation`:

```tsx
import { LazyMotion, domAnimation, m } from 'framer-motion';

export function OptimizedApp({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </m.div>
    </LazyMotion>
  );
}
```

---

## 6. Accessibility: Reduced Motion

Always respect users' motion preferences:

```tsx
import { useReducedMotion } from 'framer-motion';

export function AccessibleAnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
```

