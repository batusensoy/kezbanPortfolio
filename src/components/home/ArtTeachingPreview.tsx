import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, GraduationCap, Palette, Compass, CalendarCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TEACHING_OFFERINGS } from '@/data/teaching';
import { ARTIST } from '@/data/artist';

const OFFERING_ICONS = [Palette, Compass, BookOpen, GraduationCap];

export function ArtTeachingPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4EFEB] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="Private Tuition & Mentorship"
            title="Art Teaching & Portfolio Guidance"
            description={`Alongside her studio practice, ${ARTIST.name} offers tailored one-to-one art lessons and academic portfolio mentorship for beginners, developing painters, and students preparing for GCSE or university admissions.`}
            className="mb-0"
          />

          <Link
            href="/teaching"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] text-charcoal font-medium pb-1.5 border-b-2 border-charcoal hover:border-terracotta hover:text-terracotta transition-colors self-start md:self-auto shrink-0 group"
          >
            <span>Explore Lessons & Pricing</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 4 Teaching Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TEACHING_OFFERINGS.map((offering, idx) => {
            const IconComponent = OFFERING_ICONS[idx % OFFERING_ICONS.length];
            return (
              <article
                key={offering.id}
                className="p-8 sm:p-10 rounded-2xl bg-canvas border border-[#E3DDD5] hover:border-charcoal/30 shadow-gallery-sm hover:shadow-gallery-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-terracotta font-medium">
                      {offering.eyebrow}
                    </span>
                    <IconComponent className="w-5 h-5 text-terracotta/80" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal group-hover:text-terracotta transition-colors">
                    {offering.title}
                  </h3>

                  <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
                    {offering.shortDescription}
                  </p>

                  <p className="text-xs text-charcoal-muted/90 font-light pt-1">
                    <strong className="font-medium text-charcoal">Ideal for:</strong> {offering.audience}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#E8E2D9] flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs">
                    <span className="text-charcoal-muted uppercase tracking-wider block text-[10px]">
                      Tuition Rate
                    </span>
                    <span className="font-serif text-sm font-medium text-charcoal">
                      {offering.ratePlaceholder}
                    </span>
                  </div>

                  <div className="flex items-center space-x-5">
                    <Link
                      href={`/teaching#${offering.id}`}
                      className="text-xs uppercase tracking-[0.14em] text-charcoal-muted hover:text-charcoal transition-colors font-medium"
                    >
                      Details
                    </Link>

                    <Link
                      href={`/contact?lesson=${encodeURIComponent(offering.title)}`}
                      className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.14em] px-4 py-2 rounded-full bg-charcoal text-canvas hover:bg-terracotta transition-colors font-medium"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Direct Arrangement Note & Secondary Actions */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-canvas/80 border border-[#E3DDD5] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <CalendarCheck className="w-6 h-6 text-terracotta shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <h4 className="font-serif text-lg font-medium text-charcoal">
                Personal Studio Arrangements & Scheduling
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed max-w-3xl">
                All lesson plans, scheduling, and payment arrangements are organized directly with {ARTIST.name} to ensure a personal, flexible learning experience tailored to each student or family.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
            <Link
              href="/teaching"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-charcoal/25 hover:border-charcoal text-charcoal text-xs uppercase tracking-[0.15em] font-medium transition-colors"
            >
              View Teaching Details
            </Link>
            <Link
              href="/contact?lesson=Art%20Lessons%20Enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-charcoal text-canvas hover:bg-terracotta text-xs uppercase tracking-[0.15em] font-medium transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

