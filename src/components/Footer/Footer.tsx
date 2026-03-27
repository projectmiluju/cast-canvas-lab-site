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
          <span className={styles.logoMark} aria-hidden="true" />
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
