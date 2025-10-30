import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          CastCanvas Lab
        </Link>

        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
        </nav>

        <a href="#cta" className={styles.cta}>
          Get Started
        </a>
      </div>
    </header>
  );
}
