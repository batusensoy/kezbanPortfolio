'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ARTIST } from '@/data/artist';

interface FormData {
  name: string;
  email: string;
  inquiryType: 'Acquisition' | 'Commission' | 'General' | 'Press';
  subject: string;
  message: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const artworkParam = searchParams.get('artwork');
  const commissionParam = searchParams.get('commission');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    inquiryType: artworkParam ? 'Acquisition' : commissionParam ? 'Commission' : 'Acquisition',
    subject: artworkParam
      ? `Acquisition Inquiry: "${artworkParam}"`
      : commissionParam
      ? `Custom Commission Inquiry: Inspired by "${commissionParam}"`
      : 'General Studio Inquiry',
    message: artworkParam
      ? `Dear ${ARTIST.name},\n\nI am interested in acquiring your artwork "${artworkParam}". Could you please provide information regarding pricing, certificate of authenticity, and shipping?\n\nThank you.`
      : commissionParam
      ? `Dear ${ARTIST.name},\n\nI would like to inquire about commissioning a custom painting inspired by "${commissionParam}".\n\nApproximate dimensions: \nPreferred color palette: \n\nLooking forward to hearing from you.`
      : '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (artworkParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'Acquisition',
        subject: `Acquisition Inquiry: "${artworkParam}"`,
        message: `Dear ${ARTIST.name},\n\nI am interested in acquiring your artwork "${artworkParam}". Could you please provide information regarding pricing, certificate of authenticity, and shipping?\n\nThank you.`,
      }));
    } else if (commissionParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'Commission',
        subject: `Custom Commission Inquiry: Inspired by "${commissionParam}"`,
        message: `Dear ${ARTIST.name},\n\nI would like to inquire about commissioning a custom painting inspired by "${commissionParam}".\n\nApproximate dimensions: \nPreferred color palette: \n\nLooking forward to hearing from you.`,
      }));
    }
  }, [artworkParam, commissionParam]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Construct detailed mailto link with all form parameters
    const emailSubject = encodeURIComponent(`[${formData.inquiryType}] ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\n---\nSent via ${ARTIST.name} Studio Website Portfolio`
    );

    const mailtoUrl = `mailto:${ARTIST.contact.email}?subject=${emailSubject}&body=${emailBody}`;

    setIsSubmitted(true);

    // Trigger email client in new tab/window safely
    window.location.href = mailtoUrl;
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-canvas-elevated border border-[#E3DDD5] shadow-frame">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal">
          Send a Direct Inquiry
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
          Please fill out the details below. Upon submission, this form will open your default email client with your message pre-formatted directly to{' '}
          <strong className="text-charcoal font-medium">{ARTIST.contact.email}</strong>.
        </p>
      </div>

      {isSubmitted && (
        <div className="mb-6 p-4 rounded-xl bg-olive/10 border border-olive/30 flex items-start space-x-3 text-xs text-charcoal">
          <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">Opening your email application...</span>
            If your email software did not open automatically, you can email directly at{' '}
            <a
              href={`mailto:${ARTIST.contact.email}`}
              className="underline font-medium text-terracotta"
            >
              {ARTIST.contact.email}
            </a>
            .
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Inquiry Type Selector */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-medium text-charcoal mb-2">
            Inquiry Nature
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['Acquisition', 'Commission', 'General', 'Press'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, inquiryType: type })}
                className={`py-2.5 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                  formData.inquiryType === type
                    ? 'bg-charcoal text-canvas border-charcoal shadow-sm'
                    : 'bg-canvas-subtle border-[#E3DDD5] text-charcoal-muted hover:text-charcoal hover:border-charcoal/40'
                }`}
              >
                {type === 'Acquisition'
                  ? 'Artwork Purchase'
                  : type === 'Commission'
                  ? 'Custom Painting'
                  : type === 'Press'
                  ? 'Press / Gallery'
                  : 'General'}
              </button>
            ))}
          </div>
        </div>

        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs uppercase tracking-wider font-medium text-charcoal mb-2"
            >
              Your Full Name <span className="text-terracotta">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="e.g. Helena Vance"
              className={`w-full px-4 py-3 rounded-xl bg-canvas border text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none transition-colors ${
                errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[#E3DDD5] focus:border-charcoal'
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center space-x-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider font-medium text-charcoal mb-2"
            >
              Your Email Address <span className="text-terracotta">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="e.g. helena@collector.com"
              className={`w-full px-4 py-3 rounded-xl bg-canvas border text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none transition-colors ${
                errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-[#E3DDD5] focus:border-charcoal'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center space-x-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs uppercase tracking-wider font-medium text-charcoal mb-2"
          >
            Subject <span className="text-terracotta">*</span>
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: undefined });
            }}
            placeholder="e.g. Inquiring about available works or bespoke canvas"
            className={`w-full px-4 py-3 rounded-xl bg-canvas border text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none transition-colors ${
              errors.subject
                ? 'border-red-500 focus:border-red-500'
                : 'border-[#E3DDD5] focus:border-charcoal'
            }`}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider font-medium text-charcoal mb-2"
          >
            Your Message <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Share details regarding your space, preferred scale, or questions about specific paintings..."
            className={`w-full px-4 py-3 rounded-xl bg-canvas border text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none transition-colors leading-relaxed ${
              errors.message
                ? 'border-red-500 focus:border-red-500'
                : 'border-[#E3DDD5] focus:border-charcoal'
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-charcoal text-canvas hover:bg-terracotta text-xs uppercase tracking-[0.16em] font-medium transition-colors shadow-gallery-sm group"
          >
            <Mail className="w-4 h-4 text-canvas" />
            <span>Open Email to Send Inquiry</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <p className="text-[11px] text-charcoal-muted font-light">
          No data is stored on external servers. All correspondence is handled through your personal secure email application.
        </p>
      </form>
    </div>
  );
}

