'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { getArtist } from '@/data/artist';
import { useLanguage } from '@/i18n/LanguageContext';

interface FormData {
  name: string;
  email: string;
  inquiryType: 'Acquisition' | 'Commission' | 'Lessons' | 'General' | 'Press';
  subject: string;
  message: string;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const artworkParam = searchParams.get('artwork');
  const commissionParam = searchParams.get('commission');
  const lessonParam = searchParams.get('lesson');

  const { locale, t } = useLanguage();
  const artist = getArtist(locale);
  const tf = t.contact.form;

  const getInitialSubject = () => {
    if (artworkParam) return tf.templates.artworkSubject(artworkParam);
    if (commissionParam) return tf.templates.commissionSubject(commissionParam);
    if (lessonParam) return tf.templates.lessonSubject(lessonParam);
    return tf.templates.defaultSubject;
  };

  const getInitialMessage = () => {
    if (artworkParam) return tf.templates.artworkBody(artist.name, artworkParam);
    if (commissionParam) return tf.templates.commissionBody(artist.name, commissionParam);
    if (lessonParam) return tf.templates.lessonBody(artist.name, lessonParam);
    return '';
  };

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    inquiryType: artworkParam
      ? 'Acquisition'
      : commissionParam
      ? 'Commission'
      : lessonParam
      ? 'Lessons'
      : 'Acquisition',
    subject: getInitialSubject(),
    message: getInitialMessage(),
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prefilled templates when query params or locale change
  useEffect(() => {
    if (artworkParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'Acquisition',
        subject: tf.templates.artworkSubject(artworkParam),
        message: tf.templates.artworkBody(artist.name, artworkParam),
      }));
    } else if (commissionParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'Commission',
        subject: tf.templates.commissionSubject(commissionParam),
        message: tf.templates.commissionBody(artist.name, commissionParam),
      }));
    } else if (lessonParam) {
      setFormData((prev) => ({
        ...prev,
        inquiryType: 'Lessons',
        subject: tf.templates.lessonSubject(lessonParam),
        message: tf.templates.lessonBody(artist.name, lessonParam),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        subject:
          prev.subject === 'General Studio Inquiry' ||
          prev.subject === 'Genel Stüdyo İletişim Talebi'
            ? tf.templates.defaultSubject
            : prev.subject,
      }));
    }
    // Clear validation error messages when switching language so they re-validate in new language
    setErrors({});
  }, [artworkParam, commissionParam, lessonParam, locale, tf, artist.name]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = tf.errors.nameRequired;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = tf.errors.nameMin;
    }

    if (!formData.email.trim()) {
      newErrors.email = tf.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = tf.errors.emailInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = tf.errors.subjectRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = tf.errors.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = tf.errors.messageMin;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const emailSubject = encodeURIComponent(
      `[${tf.types[formData.inquiryType]}] ${formData.subject}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${tf.types[formData.inquiryType]}\n\nMessage:\n${formData.message}\n\n---\nSent via ${artist.name} Studio Website Portfolio`
    );

    const mailtoUrl = `mailto:${artist.contact.email}?subject=${emailSubject}&body=${emailBody}`;

    setIsSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-canvas-elevated border border-[#E3DDD5] shadow-frame">
      <div className="mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal">
          {tf.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
          {tf.descriptionPrefix}
          <strong className="text-charcoal font-medium">{artist.contact.email}</strong>
          {tf.descriptionSuffix}
        </p>
      </div>

      {isSubmitted && (
        <div className="mb-6 p-4 rounded-xl bg-olive/10 border border-olive/30 flex items-start space-x-3 text-xs text-charcoal">
          <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">{tf.submittedTitle}</span>
            {tf.submittedDesc}{' '}
            <a
              href={`mailto:${artist.contact.email}`}
              className="underline font-medium text-terracotta"
            >
              {artist.contact.email}
            </a>
            .
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Inquiry Type Selector */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-medium text-charcoal mb-2">
            {tf.inquiryNatureLabel}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {(['Acquisition', 'Commission', 'Lessons', 'General', 'Press'] as const).map((type) => (
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
                {tf.types[type]}
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
              {tf.nameLabel} <span className="text-terracotta">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder={tf.namePlaceholder}
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
              {tf.emailLabel} <span className="text-terracotta">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder={tf.emailPlaceholder}
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
            {tf.subjectLabel} <span className="text-terracotta">*</span>
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: undefined });
            }}
            placeholder={tf.subjectPlaceholder}
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
            {tf.messageLabel} <span className="text-terracotta">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: undefined });
            }}
            placeholder={tf.messagePlaceholder}
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
            <span>{tf.submitBtn}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <p className="text-[11px] text-charcoal-muted font-light">
          {tf.privacyNote}
        </p>
      </form>
    </div>
  );
}
