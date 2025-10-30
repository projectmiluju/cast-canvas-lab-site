import styles from './HowItWorks.module.scss';

const steps = [
  {
    number: '01',
    title: 'Drop',
    description: 'PDF, 이미지를 캔버스 위에 드래그 앤 드롭하세요.',
  },
  {
    number: '02',
    title: 'Arrange',
    description: '자료를 공간적으로 배치하고, 노트를 추가하세요.',
  },
  {
    number: '03',
    title: 'Connect',
    description: '노드를 연결해 아이디어의 흐름을 시각화하세요.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>How It Works</h2>
        <p className={styles.subtitle}>세 단계로 시작하는 공간적 리서치</p>
        <ol className={styles.steps}>
          {steps.map(({ number, title, description }) => (
            <li key={number} className={styles.step}>
              <span className={styles.number}>{number}</span>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
