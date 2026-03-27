'use client';

import { createContext, useContext, useState, useCallback } from 'react';

export type Locale = 'en' | 'ko';

interface LocaleContextValue {
  locale: Locale;
  toggle: () => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  toggle: () => {},
});

const COOKIE_KEY = 'locale';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function readCookie(): Locale {
  if (typeof document === 'undefined') return 'en';
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  const val = match ? decodeURIComponent(match[1]) : null;
  return val === 'ko' ? 'ko' : 'en';
}

function writeCookie(locale: Locale) {
  document.cookie = `${COOKIE_KEY}=${locale}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readCookie);

  const toggle = useCallback(() => {
    setLocale((prev) => {
      const next: Locale = prev === 'en' ? 'ko' : 'en';
      writeCookie(next);
      return next;
    });
  }, []);

  return <LocaleContext.Provider value={{ locale, toggle }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
