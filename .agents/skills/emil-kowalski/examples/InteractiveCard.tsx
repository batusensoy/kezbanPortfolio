import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Emil Kowalski-inspired interactive card:
 * - Tactile tap downscaling
 * - Physics-based spring animations
 * - Layout morphing between compact and expanded states
 * - Fluid content reveal with blur-fade
 */
export function InteractiveCard({
  title,
  subtitle,
  details,
}: {
  title: string;
  subtitle: string;
  details: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 30,
      }}
      whileTap={{ scale: 0.985 }}
      onClick={() => setIsExpanded((prev) => !prev)}
      className="relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-zinc-800 dark:bg-zinc-900 select-none"
    >
      <motion.div layout="position" className="flex items-center justify-between">
        <div>
          <motion.h4 layout="position" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </motion.h4>
          <motion.p layout="position" className="text-sm text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
        >
          ↓
        </motion.div>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed"
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

