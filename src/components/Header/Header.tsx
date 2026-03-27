'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from '@/contexts/LocaleContext';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import styles from './Header.module.scss';

const copy = {
  en: { features: 'Features', howItWorks: 'How it works', cta: 'Coming Soon' },
  ko: { features: '기능', howItWorks: '사용법', cta: '출시 예정' },
};

export default function Header() {
  const { locale } = useLocale();
  const t = copy[locale];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={styles.logoMark}
          >
            <rect width="32" height="32" rx="8" fill="#4F46E5" />
            <rect x="6" y="6" width="12" height="12" rx="2" fill="white" fillOpacity="0.9" />
            <rect x="14" y="14" width="12" height="12" rx="2" fill="white" fillOpacity="0.5" />
          </svg>
          CastCanvas Lab
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#features">{t.features}</a>
          <a href="#how-it-works">{t.howItWorks}</a>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitcher />
          <a href="#cta" className={styles.cta}>
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
