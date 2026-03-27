'use client';

import { useLocale } from '@/contexts/LocaleContext';
import styles from './Cta.module.scss';

const copy = {
  en: {
    title: 'Be the first to try CastCanvas Lab.',
    subtitle: "We're building in public. Sign up to get early access when we launch.",
    placeholder: 'you@example.com',
    button: 'Notify me',
    note: 'No spam. Only progress updates.',
  },
  ko: {
    title: '가장 먼저 써보고 싶으신가요?',
    subtitle: '지금 만들고 있습니다. 출시 소식을 이메일로 받아보세요.',
    placeholder: 'your@email.com',
    button: '알림 신청',
    note: '스팸은 없습니다. 출시 소식만 전해드립니다.',
  },
};

export default function Cta() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section id="cta" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="cta-email" className={styles.srOnly}>
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              placeholder={t.placeholder}
              className={styles.input}
              autoComplete="email"
            />
            <button type="submit" className={styles.button}>
              {t.button}
            </button>
          </form>
          <p className={styles.note}>{t.note}</p>
        </div>
      </div>
    </section>
  );
}
