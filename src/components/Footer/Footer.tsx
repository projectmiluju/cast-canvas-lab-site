import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>CastCanvas Lab</span>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} CastCanvas Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
