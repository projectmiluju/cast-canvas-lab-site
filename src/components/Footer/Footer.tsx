'use client';

import { useLocale } from '@/contexts/LocaleContext';
import styles from './Footer.module.scss';

const copy = {
  en: { tagline: 'Spatial workspace for researchers.' },
  ko: { tagline: '생각을 펼쳐두는 리서치 공간.' },
};

export default function Footer() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <svg
            width="20"
            height="20"
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
          <span className={styles.logo}>CastCanvas Lab</span>
        </div>
        <p className={styles.tagline}>{t.tagline}</p>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} CastCanvas Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
