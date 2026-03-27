'use client';

import { useLocale } from '@/contexts/LocaleContext';
import styles from './LanguageSwitcher.module.scss';

export default function LanguageSwitcher() {
  const { locale, toggle } = useLocale();

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.switcher}
      aria-label={locale === 'en' ? '한국어로 전환' : 'Switch to English'}
    >
      <span className={locale === 'en' ? styles.active : styles.inactive}>EN</span>
      <span className={styles.divider} aria-hidden="true">
        /
      </span>
      <span className={locale === 'ko' ? styles.active : styles.inactive}>KO</span>
    </button>
  );
}
