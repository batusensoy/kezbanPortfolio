'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ARTIST } from '@/data/artist';

export function ContactInvitation() {
  return (
    <section className="px-6 sm:px-8 lg:px-16 py-24 sm:py-32 bg-canvas">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Handwritten feel heading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-hand text-2xl sm:text-3xl text-terracotta"
        >
          if something stays with you —
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.1] font-normal"
        >
          write to me.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-charcoal/60 leading-relaxed max-w-lg mx-auto font-light"
        >
          Whether you&apos;re curious about a painting, thinking about a commission,
          or just want to say something — I read every message myself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/contact"
            className="font-serif text-lg text-charcoal border-b-2 border-charcoal/30 hover:border-terracotta hover:text-terracotta transition-colors pb-0.5"
          >
            open the contact page
          </Link>
          <span className="text-charcoal/20 hidden sm:block">or</span>
          <a
            href={`mailto:${ARTIST.contact.email}`}
            className="text-sm text-charcoal/50 hover:text-charcoal transition-colors font-light"
          >
            {ARTIST.contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

