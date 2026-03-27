'use client';

import { useLocale } from '@/contexts/LocaleContext';
import styles from './Features.module.scss';

const icons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 3H10V10H3V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 3H21V10H14V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 14H10V21H3V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path
      d="M17.5 14V21M14 17.5H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="5" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 12H12M14 7.5L12 12M14 16.5L12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M3 19C3 16.2 5.7 14 9 14C10.2 14 11.3 14.3 12.2 14.9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 19C14 17.3 15.3 16 17 16C18.7 16 20 17.3 20 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8 13H16M8 17H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

const copy = {
  en: {
    title: 'Everything you need to think spatially.',
    subtitle:
      'Built for depth, designed for clarity. CastCanvas Lab turns your screen into an active cognitive environment.',
    items: [
      {
        title: 'Infinite Canvas',
        description:
          'Place anything, anywhere. No grid, no limits. Pan and zoom freely across a workspace that grows with your research.',
      },
      {
        title: 'Visual Connections',
        description:
          'Draw edges between nodes to map relationships. Turn a collection of documents into a connected knowledge graph.',
      },
      {
        title: 'Real-time Collaboration',
        description:
          'Work together on the same canvas, live. See where your colleagues are focusing and co-create in real time.',
      },
      {
        title: 'Documents & Images',
        description:
          'Drag and drop PDFs and images directly onto the canvas. View, annotate, and reference them without leaving your workspace.',
      },
    ],
  },
  ko: {
    title: '리서치에 필요한 것, 한 곳에.',
    subtitle:
      '복잡한 자료도 캔버스 위에 펼쳐두면 구조가 보입니다. CastCanvas Lab은 생각의 흐름을 방해하지 않습니다.',
    items: [
      {
        title: '무한 캔버스',
        description:
          '격자도, 페이지도 없습니다. 자료를 원하는 곳에 두고, 필요할 때 확대하거나 전체를 조망하세요.',
      },
      {
        title: '시각적 연결',
        description:
          '자료 사이에 선을 그어 관계를 표시하세요. 흩어진 문서들이 하나의 지식 지도로 이어집니다.',
      },
      {
        title: '실시간 협업',
        description:
          '같은 캔버스에서 팀원과 동시에 작업하세요. 서로 어디를 보고 있는지 바로 확인할 수 있습니다.',
      },
      {
        title: '문서 & 이미지',
        description:
          'PDF와 이미지를 캔버스에 바로 올려두세요. 다른 탭을 열지 않고도 보고, 메모하고, 연결할 수 있습니다.',
      },
    ],
  },
};

export default function Features() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {t.items.map((item, i) => (
            <article key={i} className={styles.card}>
              <span className={styles.icon}>{icons[i]}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
