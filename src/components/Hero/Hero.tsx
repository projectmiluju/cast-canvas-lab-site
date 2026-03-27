'use client';

import { useLocale } from '@/contexts/LocaleContext';
import styles from './Hero.module.scss';

const copy = {
  en: {
    badge: 'Spatial Research Workspace',
    title: 'A workspace where your',
    titleAccent: 'research takes shape.',
    subtitle:
      'Place documents, images, and notes on an infinite canvas. Connect them visually. Think spatially.',
    primaryCta: 'Coming Soon',
    secondaryCta: 'See how it works',
  },
  ko: {
    badge: '공간형 리서치 워크스페이스',
    title: '생각의 흐름을 그대로',
    titleAccent: '펼쳐두는 공간.',
    subtitle:
      '문서, 이미지, 메모를 하나의 캔버스에 올려두고 연결하세요. 리서치가 눈앞에 펼쳐집니다.',
    primaryCta: '출시 예정',
    secondaryCta: '어떻게 쓰나요?',
  },
};

export default function Hero() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.badge}>{t.badge}</p>
          <h1 className={styles.title}>
            {t.title}
            <br />
            <span className={styles.accent}>{t.titleAccent}</span>
          </h1>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <div className={styles.actions}>
            <a href="#cta" className={styles.primary}>
              {t.primaryCta}
            </a>
            <a href="#how-it-works" className={styles.secondary}>
              {t.secondaryCta}
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <CanvasPreview />
        </div>
      </div>
    </section>
  );
}

function CanvasPreview() {
  return (
    <div className={styles.canvas}>
      <svg
        viewBox="0 0 560 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.canvasSvg}
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 18 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 32 + 16}
              cy={row * 32 + 16}
              r="1.5"
              fill="var(--palette-neutral-300)"
              opacity="0.4"
            />
          )),
        )}
        <line
          x1="140"
          y1="100"
          x2="280"
          y2="160"
          stroke="var(--palette-primary-400)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.6"
        />
        <line
          x1="280"
          y1="160"
          x2="400"
          y2="100"
          stroke="var(--palette-primary-400)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.6"
        />
        <line
          x1="280"
          y1="160"
          x2="280"
          y2="270"
          stroke="var(--palette-primary-400)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.6"
        />
        <line
          x1="140"
          y1="100"
          x2="80"
          y2="220"
          stroke="var(--palette-neutral-300)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.4"
        />
        <rect
          x="88"
          y="62"
          width="104"
          height="76"
          rx="8"
          fill="var(--color-bg-surface)"
          stroke="var(--color-border-default)"
          strokeWidth="1"
        />
        <rect x="100" y="76" width="60" height="6" rx="3" fill="var(--palette-neutral-200)" />
        <rect x="100" y="88" width="80" height="4" rx="2" fill="var(--palette-neutral-100)" />
        <rect x="100" y="98" width="72" height="4" rx="2" fill="var(--palette-neutral-100)" />
        <rect x="100" y="108" width="56" height="4" rx="2" fill="var(--palette-neutral-100)" />
        <rect x="100" y="118" width="64" height="4" rx="2" fill="var(--palette-neutral-100)" />
        <rect x="88" y="62" width="104" height="14" rx="8" fill="var(--palette-primary-100)" />
        <rect x="88" y="68" width="104" height="8" fill="var(--palette-primary-100)" />
        <text
          x="100"
          y="73"
          fontSize="7"
          fill="var(--palette-primary-700)"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
        >
          PDF Document
        </text>
        <rect
          x="328"
          y="62"
          width="104"
          height="76"
          rx="8"
          fill="var(--color-bg-surface)"
          stroke="var(--color-border-default)"
          strokeWidth="1"
        />
        <rect x="328" y="62" width="104" height="44" rx="8" fill="var(--palette-neutral-100)" />
        <rect x="328" y="88" width="104" height="18" fill="var(--palette-neutral-100)" />
        <circle cx="380" cy="82" r="12" fill="var(--palette-neutral-200)" />
        <polyline
          points="340,106 360,88 376,98 392,80 420,106"
          stroke="var(--palette-neutral-300)"
          strokeWidth="1.5"
          fill="none"
        />
        <text
          x="340"
          y="122"
          fontSize="7"
          fill="var(--color-text-secondary)"
          fontFamily="Inter, sans-serif"
        >
          Reference Image
        </text>
        <text
          x="340"
          y="132"
          fontSize="6"
          fill="var(--color-text-tertiary)"
          fontFamily="Inter, sans-serif"
        >
          canvas-sketch.png
        </text>
        <rect
          x="228"
          y="130"
          width="104"
          height="72"
          rx="8"
          fill="var(--palette-primary-50)"
          stroke="var(--palette-primary-200)"
          strokeWidth="1"
        />
        <rect x="240" y="144" width="48" height="5" rx="2.5" fill="var(--palette-primary-400)" />
        <rect x="240" y="155" width="80" height="4" rx="2" fill="var(--palette-primary-200)" />
        <rect x="240" y="165" width="72" height="4" rx="2" fill="var(--palette-primary-200)" />
        <rect x="240" y="175" width="60" height="4" rx="2" fill="var(--palette-primary-200)" />
        <text
          x="240"
          y="143"
          fontSize="7"
          fill="var(--palette-primary-700)"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
        >
          Core Hypothesis
        </text>
        <rect
          x="228"
          y="240"
          width="104"
          height="64"
          rx="8"
          fill="var(--color-bg-surface)"
          stroke="var(--color-border-default)"
          strokeWidth="1"
        />
        <rect x="240" y="254" width="40" height="5" rx="2.5" fill="var(--palette-neutral-300)" />
        <rect x="240" y="265" width="80" height="4" rx="2" fill="var(--palette-neutral-100)" />
        <rect x="240" y="275" width="64" height="4" rx="2" fill="var(--palette-neutral-100)" />
        <text
          x="240"
          y="253"
          fontSize="7"
          fill="var(--color-text-secondary)"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
        >
          Research Note
        </text>
        <rect
          x="36"
          y="188"
          width="88"
          height="64"
          rx="8"
          fill="var(--color-bg-surface)"
          stroke="var(--color-border-default)"
          strokeWidth="1"
        />
        <rect x="48" y="202" width="36" height="5" rx="2.5" fill="var(--palette-neutral-300)" />
        <rect x="48" y="213" width="64" height="4" rx="2" fill="var(--palette-neutral-100)" />
        <rect x="48" y="223" width="52" height="4" rx="2" fill="var(--palette-neutral-100)" />
        <text
          x="48"
          y="201"
          fontSize="7"
          fill="var(--color-text-secondary)"
          fontFamily="Inter, sans-serif"
          fontWeight="500"
        >
          Source
        </text>
        <circle cx="140" cy="100" r="4" fill="var(--palette-primary-500)" />
        <circle cx="280" cy="160" r="4" fill="var(--palette-primary-500)" />
        <circle cx="400" cy="100" r="4" fill="var(--palette-primary-500)" />
        <circle cx="280" cy="270" r="4" fill="var(--palette-primary-400)" opacity="0.7" />
        <circle cx="80" cy="220" r="4" fill="var(--palette-neutral-400)" opacity="0.6" />
      </svg>
    </div>
  );
}
