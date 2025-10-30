import styles from './Cta.module.scss';

export default function Cta() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Coming Soon</h2>
        <p className={styles.subtitle}>
          CastCanvas Lab은 현재 개발 중입니다.
          <br />
          공간 위에서 리서치하는 새로운 경험을 곧 만나보세요.
        </p>
        {/* TODO: 얼리 액세스 이메일 폼 추가 */}
      </div>
    </section>
  );
}
