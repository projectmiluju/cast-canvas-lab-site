'use client';

import { createContext, useContext, useCallback, useSyncExternalStore } from 'react';

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
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  const val = match ? decodeURIComponent(match[1]) : null;
  return val === 'ko' ? 'ko' : 'en';
}

function writeCookie(locale: Locale) {
  document.cookie = `${COOKIE_KEY}=${locale}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

// 외부 스토어: 구독자 목록 + 현재 값
const listeners = new Set<() => void>();
let currentLocale: Locale = 'en';

const localeStore = {
  subscribe(cb: () => void) {
    listeners.add(cb);
    return () => listeners.delete(cb);
  },
  getSnapshot(): Locale {
    return currentLocale;
  },
  // SSR에서는 항상 'en' — hydration 불일치 방지
  getServerSnapshot(): Locale {
    return 'en';
  },
  set(next: Locale) {
    currentLocale = next;
    writeCookie(next);
    listeners.forEach((cb) => cb());
  },
};

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    localeStore.subscribe,
    localeStore.getSnapshot,
    localeStore.getServerSnapshot,
  );

  const toggle = useCallback(() => {
    // 첫 토글 시 쿠키를 읽어 현재 실제 값 기준으로 전환
    const current = readCookie();
    localeStore.set(current === 'en' ? 'ko' : 'en');
  }, []);

  return <LocaleContext.Provider value={{ locale, toggle }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
