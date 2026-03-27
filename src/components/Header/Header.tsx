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
          <span className={styles.logoMark} aria-hidden="true" />
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
