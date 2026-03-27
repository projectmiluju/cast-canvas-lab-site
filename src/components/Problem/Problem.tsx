'use client';

import { useLocale } from '@/contexts/LocaleContext';
import styles from './Problem.module.scss';

const icons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 7C3 5.9 3.9 5 5 5H19C20.1 5 21 5.9 21 7V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 5V9" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 3V17" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 8H8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 12H8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 17V21" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 3V12L16 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>,
];

const copy = {
  en: {
    title: "Research doesn't fit in a list.",
    subtitle:
      'Existing tools each have their strengths — but none let you work with documents and images spatially, the way your thinking actually flows.',
    items: [
      {
        title: 'Files scattered across folders',
        description:
          'Finding the right document means digging through nested directories and cryptic filenames.',
      },
      {
        title: 'Context lost between tabs',
        description:
          'Linear document structures break the mental links between your findings and your sources.',
      },
      {
        title: 'No way to see the whole picture',
        description:
          "Standard tools force a top-down view. Real research requires a bird's-eye perspective.",
      },
    ],
  },
  ko: {
    title: '리서치는 목록으로 정리되지 않습니다.',
    subtitle:
      '기존 도구들은 저마다 잘하는 게 있지만, 자료를 펼쳐놓고 한눈에 보기엔 늘 부족했습니다.',
    items: [
      {
        title: '파일은 폴더 어딘가에 묻혀 있고',
        description: '찾으려면 폴더를 뒤지고, 탭을 열고, 또 다른 탭을 열어야 합니다.',
      },
      {
        title: '탭을 닫으면 맥락도 사라지고',
        description: '어디서 뭘 봤는지, 왜 저장했는지 — 나중에 다시 열면 기억이 나지 않습니다.',
      },
      {
        title: '전체 그림이 머릿속에만 있고',
        description: '자료는 여기저기 흩어져 있는데, 연결해서 볼 수 있는 도구가 없었습니다.',
      },
    ],
  },
};

export default function Problem() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
        <ul className={styles.grid}>
          {t.items.map((item, i) => (
            <li key={i} className={styles.card}>
              <span className={styles.icon}>{icons[i]}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
