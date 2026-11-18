'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  Locale,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  TRANSLATIONS,
  TranslationDictionary,
} from '@/i18n/translations';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: TRANSLATIONS[DEFAULT_LOCALE],
});

/**
 * Determines the visitor's initial language on client hydration:
 * 1. Saved manual preference in localStorage takes highest priority.
 * 2. Otherwise, check browser primary preferred language:
 *    - If English ('en*'), use 'en'.
 *    - If Turkish ('tr*') or any other language, fallback to 'tr' (default).
 */
function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === 'tr' || saved === 'en') {
      return saved;
    }
  } catch {
    // localStorage may be unavailable in restricted contexts
  }

  try {
    const browserLang = (
      window.navigator.languages?.[0] ||
      window.navigator.language ||
      ''
    ).toLowerCase();

    if (browserLang.startsWith('en')) {
      return 'en';
    }
  } catch {
    // Fallback to default Turkish
  }

  return DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const initial = detectInitialLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      document.documentElement.lang = newLocale;
      try {
        window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      } catch {
        // Ignore storage write errors
      }
    }
  }, []);

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: TRANSLATIONS[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
