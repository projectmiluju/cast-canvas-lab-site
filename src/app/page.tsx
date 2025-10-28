import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>CastCanvas Lab</h1>
      <p className={styles.subtitle}>Design system applied. Ready to build.</p>
    </main>
  );
}
