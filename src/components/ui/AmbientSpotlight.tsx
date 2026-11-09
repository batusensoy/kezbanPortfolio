'use client';

import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export function AmbientSpotlight() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useSpring(-500, { stiffness: 120, damping: 25 });
  const mouseY = useSpring(-500, { stiffness: 120, damping: 25 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-700 opacity-60 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(196, 151, 70, 0.045), transparent 80%)`,
      }}
    />
  );
}
