import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Palette,
  Compass,
  CheckCircle2,
  Clock,
  MapPin,
  Mail,
  MessageCircle,
  CalendarCheck,
} from 'lucide-react';
import { ARTIST } from '@/data/artist';
import { TEACHING_OFFERINGS, TEACHING_ARRANGEMENTS } from '@/data/teaching';

export const metadata: Metadata = {
  title: 'Art Teaching, Portfolio Mentorship & Private Lessons',
  description: `Private art lessons, painting tuition, GCSE Art support, and university portfolio preparation with contemporary visual artist ${ARTIST.name}.`,
};

const OFFERING_ICONS = [Palette, Compass, BookOpen, GraduationCap];

export default function TeachingPage() {
  return (
    <div className="py-12 sm:py-20 bg-canvas min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        {/* Hero Introduction Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
              Private Tuition & Academic Mentorship
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal tracking-tight leading-[1.12]">
              Art Teaching & Portfolio Guidance
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
              <p>
                Alongside her studio practice, {ARTIST.name} offers individualized art lessons and mentorship for students of all ages and ambitions—from complete beginners discovering the joy of painting to aspiring artists preparing GCSE coursework or university portfolios.
              </p>
              <p>
                Rooted in traditional material craft and contemporary visual inquiry, lessons are tailored to each student&apos;s personal pace, creative curiosity, and academic objectives.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?lesson=Art%20Lessons%20Enquiry"
                className="inline-flex items-center space-x-2.5 text-xs uppercase tracking-[0.16em] px-7 py-4 rounded-full bg-charcoal text-canvas hover:bg-terracotta transition-colors font-medium group"
              >
                <span>Enquire About Lessons</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="#programmes-heading"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] px-7 py-4 rounded-full border border-charcoal/25 hover:border-charcoal text-charcoal transition-colors font-medium"
              >
                <span>Explore Programmes</span>
              </a>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal-muted font-light border-t border-[#E8E2D9]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-terracotta shrink-0" aria-hidden="true" />
                <span>In-Person ({ARTIST.location}) & Online Live Tuition</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-terracotta shrink-0" aria-hidden="true" />
                <span>Flexible Weekly, Fortnightly & Holiday Sessions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Teaching Atmosphere Image */}
          <div className="lg:col-span-5">
            <div className="relative p-3 sm:p-4 bg-canvas-elevated rounded-2xl border border-[#E3DDD5] shadow-frame">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#EDE6DF]">
                <Image
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=85"
                  alt="Art studio brushes, pigments, and canvases prepared for a painting lesson"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-[#EDE6DF] flex items-center justify-between text-xs text-charcoal-muted font-light px-1">
                <span>One-to-One Studio & Online Tuition</span>
                <span className="italic font-serif">All Levels Welcome</span>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Teaching Offerings Section */}
        <section className="space-y-12 pt-8 border-t border-[#E8E2D9]" aria-labelledby="programmes-heading">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
              Tailored Pathways
            </span>
            <h2
              id="programmes-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal leading-[1.15]"
            >
              Teaching Programmes & Audiences
            </h2>
            <p className="text-base text-charcoal-muted font-light leading-relaxed">
              Every student works from a personalized study plan designed around their experience level, preferred mediums, and creative or academic goals.
            </p>
          </div>

          <div className="space-y-10">
            {TEACHING_OFFERINGS.map((offering, idx) => {
              const IconComponent = OFFERING_ICONS[idx % OFFERING_ICONS.length];
              return (
                <article
                  key={offering.id}
                  id={offering.id}
                  className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-canvas-subtle border border-[#E8E2D9] shadow-gallery-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left: Overview & Audience (7 cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono text-terracotta tracking-widest">
                          0{idx + 1}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-terracotta font-medium">
                          {offering.eyebrow}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-charcoal flex items-center gap-3">
                        <span>{offering.title}</span>
                      </h3>

                      <p className="text-xs sm:text-sm text-charcoal bg-canvas px-4 py-2.5 rounded-xl border border-[#E3DDD5] inline-block">
                        <strong className="font-medium">Who it is for:</strong>{' '}
                        <span className="text-charcoal-muted font-light">{offering.audience}</span>
                      </p>

                      <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
                        {offering.fullDescription}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-6 text-xs text-charcoal-muted font-light">
                        <div>
                          <span className="uppercase tracking-wider text-[10px] text-charcoal font-medium block mb-1">
                            Format
                          </span>
                          <span>{offering.sessionFormat}</span>
                        </div>
                        <div>
                          <span className="uppercase tracking-wider text-[10px] text-charcoal font-medium block mb-1">
                            Recommended Duration
                          </span>
                          <span>{offering.recommendedDuration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Key Focus Areas & Direct CTA (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-canvas border border-[#E3DDD5] space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
                            What Lessons Cover
                          </h4>
                          <IconComponent className="w-5 h-5 text-terracotta" aria-hidden="true" />
                        </div>

                        <ul className="space-y-3 text-xs sm:text-sm text-charcoal-muted font-light">
                          {offering.keyFocusAreas.map((focus, i) => (
                            <li key={i} className="flex items-start space-x-2.5">
                              <CheckCircle2
                                className="w-4 h-4 text-terracotta shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span className="leading-relaxed">{focus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5 border-t border-[#E8E2D9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
                            Rate
                          </span>
                          <span className="font-serif text-base font-medium text-charcoal">
                            {offering.ratePlaceholder}
                          </span>
                        </div>

                        <Link
                          href={`/contact?lesson=${encodeURIComponent(offering.title)}`}
                          className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-charcoal text-canvas hover:bg-terracotta text-xs uppercase tracking-[0.15em] font-medium transition-colors group"
                        >
                          <span>Enquire Now</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Lesson Arrangements, Scheduling & Payments Explanation */}
        <section
          className="p-8 sm:p-14 rounded-3xl bg-[#F4EFEB] border border-[#E8E2D9] space-y-10"
          aria-labelledby="arrangements-heading"
        >
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-medium block">
              How Lessons Work
            </span>
            <h2
              id="arrangements-heading"
              className="font-serif text-3xl sm:text-4xl font-normal text-charcoal"
            >
              Direct Arrangements, Scheduling & Payments
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
              To maintain a personal and attentive teaching environment, lessons are not booked through automated online calendars or third-party payment portals. Every arrangement is made directly with {ARTIST.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEACHING_ARRANGEMENTS.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-canvas border border-[#E3DDD5] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-terracotta">Step 0{idx + 1}</span>
                  <CalendarCheck className="w-4 h-4 text-terracotta" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Contact CTA for Students & Parents */}
        <section className="py-16 sm:py-20 px-8 sm:px-14 rounded-3xl bg-[#1C1B1A] text-canvas text-center space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C49746] font-medium block">
            Begin Your Creative Journey
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FAF8F5] max-w-2xl mx-auto leading-[1.15]">
            Enquire about private art lessons or portfolio mentorship.
          </h2>

          <p className="text-sm sm:text-base text-[#EDE6DF]/80 font-light max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re exploring art for personal enjoyment, developing your artistic skills, preparing for GCSE examinations, or building a portfolio for university applications, get in touch to discuss availability and lesson plans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?lesson=Art%20Lessons%20Enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-canvas text-charcoal hover:bg-[#C49746] text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <span>Enquire via Contact Form</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={`mailto:${ARTIST.contact.email}?subject=${encodeURIComponent('Art Lessons Enquiry')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full border border-canvas/30 hover:border-canvas hover:bg-canvas/10 text-canvas text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <Mail className="w-4 h-4 text-[#C49746]" />
              <span>{ARTIST.contact.email}</span>
            </a>

            <a
              href={ARTIST.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-full border border-canvas/20 hover:border-canvas/40 text-canvas/80 hover:text-canvas text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C49746]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

