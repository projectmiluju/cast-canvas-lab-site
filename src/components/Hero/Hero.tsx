import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.badge}>Spatial Research Workspace</p>
        <h1 className={styles.title}>
          아이디어를 공간 위에
          <br />
          <span className={styles.accent}>배치하고, 연결하세요</span>
        </h1>
        <p className={styles.subtitle}>
          문서와 이미지를 무한 캔버스 위에 자유롭게 올려놓고,
          <br className={styles.brDesktop} />
          시각적으로 정리하고, 실시간으로 함께 작업하세요.
        </p>
        <div className={styles.actions}>
          <a href="#cta" className={styles.primary}>
            Coming Soon
          </a>
          <a href="#features" className={styles.secondary}>
            기능 살펴보기
          </a>
        </div>
      </div>
    </section>
  );
}
