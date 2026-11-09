import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  linkText,
  linkHref,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCentered ? 'text-center mx-auto max-w-3xl' : 'flex flex-col md:flex-row md:items-end justify-between'
      } ${className}`}
    >
      <div className={isCentered ? '' : 'max-w-2xl'}>
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium mb-3 block">
            {eyebrow}
          </span>
        )}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal tracking-tight leading-[1.15]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {linkText && linkHref && !isCentered && (
        <div className="mt-6 md:mt-0">
          <Link
            href={linkHref}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] text-charcoal font-medium pb-1 border-b border-charcoal/40 hover:border-terracotta hover:text-terracotta transition-colors group"
          >
            <span>{linkText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

