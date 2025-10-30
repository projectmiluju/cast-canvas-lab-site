import styles from './Features.module.scss';

const features = [
  {
    title: 'Infinite Canvas',
    description: '무한히 넓은 캔버스 위에서 자유롭게 팬하고 줌하며 리서치 자료를 펼쳐보세요.',
  },
  {
    title: 'Document & Image',
    description: 'PDF 문서와 이미지를 드래그 앤 드롭으로 캔버스에 바로 배치할 수 있습니다.',
  },
  {
    title: 'Nodes & Edges',
    description: '노트를 만들고, 노드 사이를 연결선으로 이어 아이디어의 관계를 시각화하세요.',
  },
  {
    title: 'Real-time Collaboration',
    description: '같은 워크스페이스에서 팀원과 실시간으로 함께 편집하고 커서를 공유합니다.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Core Features</h2>
        <p className={styles.subtitle}>
          리서치에 필요한 핵심 기능을 하나의 캔버스 안에 담았습니다.
        </p>
        <div className={styles.grid}>
          {features.map(({ title, description }) => (
            <article key={title} className={styles.card}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
