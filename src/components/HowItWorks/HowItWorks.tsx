'use client';

import { useLocale } from '@/contexts/LocaleContext';
import styles from './HowItWorks.module.scss';

const copy = {
  en: {
    title: 'From scattered files to connected thinking.',
    subtitle: 'Three steps to start working spatially.',
    steps: [
      {
        number: '01',
        title: 'Upload documents and images',
        description:
          'Drag and drop PDFs, research papers, and screen captures directly onto the workspace.',
      },
      {
        number: '02',
        title: 'Arrange them on your canvas',
        description:
          'Group related concepts spatially. Move items around to discover new patterns and hierarchies.',
      },
      {
        number: '03',
        title: 'Connect nodes to build your map',
        description:
          'Create visual links that persist. Build a research map that explains the relationships behind your data.',
      },
    ],
  },
  ko: {
    title: '자료를 모으고, 펼치고, 연결하세요.',
    subtitle: '세 단계면 충분합니다.',
    steps: [
      {
        number: '01',
        title: '자료 올리기',
        description: 'PDF, 이미지, 스크린샷을 캔버스에 드래그해서 올려두세요.',
      },
      {
        number: '02',
        title: '원하는 대로 배치하기',
        description: '관련 있는 것끼리 가까이 두고, 보면서 자유롭게 옮기세요.',
      },
      {
        number: '03',
        title: '연결해서 구조 만들기',
        description: '자료 사이에 선을 그으면 리서치의 흐름이 한눈에 보입니다.',
      },
    ],
  },
};

export default function HowItWorks() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>
        <ol className={styles.steps}>
          {t.steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {step.number}
              </span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
