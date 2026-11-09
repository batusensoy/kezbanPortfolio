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
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-2xl font-normal text-charcoal mb-2">
          or use this form
        </h3>
        <p className="text-sm text-charcoal/45 font-light leading-relaxed">
          Fill this in and it will open your email app with everything pre-written,
          addressed to{' '}
          <span className="text-charcoal/70">{ARTIST.contact.email}</span>.
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
          <label className="block text-sm font-serif font-normal text-charcoal/70 mb-3">
            what is this about?
          </label>
          <div className="flex flex-wrap gap-2">
            {(['Acquisition', 'Commission', 'General', 'Press'] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData({ ...formData, inquiryType: type })}
                className={`py-1.5 px-4 text-sm font-light border-b-2 transition-all ${
                  formData.inquiryType === type
                    ? 'border-terracotta text-charcoal'
                    : 'border-transparent text-charcoal/40 hover:text-charcoal/70 hover:border-charcoal/20'
                }`}
              >
                {type === 'Acquisition'
                  ? 'a painting'
                  : type === 'Commission'
                  ? 'a commission'
                  : type === 'Press'
                  ? 'press / exhibition'
                  : 'something else'}
              </button>
            ))}
          </div>
        </div>

        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-serif font-normal text-charcoal/70 mb-2"
            >
              your name <span className="text-terracotta">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="e.g. Elena"
              className={`w-full px-0 py-2 bg-transparent border-0 border-b text-sm text-charcoal placeholder:text-charcoal/25 focus:outline-none transition-colors ${
                errors.name
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-charcoal/15 focus:border-charcoal/50'
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center space-x-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-serif font-normal text-charcoal/70 mb-2"
            >
              your email <span className="text-terracotta">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="hello@example.com"
              className={`w-full px-0 py-2 bg-transparent border-0 border-b text-sm text-charcoal placeholder:text-charcoal/25 focus:outline-none transition-colors ${
                errors.email
                  ? 'border-red-400 focus:border-red-400'
                  : 'border-charcoal/15 focus:border-charcoal/50'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500 flex items-center space-x-1">
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
            className="block text-sm font-serif font-normal text-charcoal/70 mb-2"
          >
            subject <span className="text-terracotta">*</span>
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: undefined });
            }}
            placeholder="e.g. that painting of the field"
            className={`w-full px-0 py-2 bg-transparent border-0 border-b text-sm text-charcoal placeholder:text-charcoal/25 focus:outline-none transition-colors ${
              errors.subject
                ? 'border-red-400 focus:border-red-400'
                : 'border-charcoal/15 focus:border-charcoal/50'
            }`}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.subject}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-serif font-normal text-charcoal/70 mb-2"
          >
            your message <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder="Tell me what's on your mind…"
            className={`w-full px-0 py-2 bg-transparent border-0 border-b text-sm text-charcoal placeholder:text-charcoal/25 focus:outline-none transition-colors leading-relaxed resize-none ${
              errors.message
                ? 'border-red-400 focus:border-red-400'
                : 'border-charcoal/15 focus:border-charcoal/50'
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-500 flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-3 text-sm text-charcoal border-b border-charcoal/30 hover:border-terracotta hover:text-terracotta transition-colors pb-0.5 group font-serif"
          >
            <Mail className="w-4 h-4" />
            send via email
          </button>
        </div>

        <p className="text-xs text-charcoal/30 font-light">
          This opens your email app. Nothing is stored anywhere.
        </p>
      </form>
    </div>
  );
}

