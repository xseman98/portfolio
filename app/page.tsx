import Link from 'next/link'
import styles from './Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.introducer}>
        <div>
          <img className={styles.picture} src="/profile.png" alt="Profile picture" />
        </div>
        <div>
          <h1 className={styles.title}>Kristián Seman</h1>
          <p className={styles.description}>Junior JS Developer</p>
        </div>
      </section>
      <section className={styles.cards}>
        <Link href="/" className={styles.card}>
          <h2>About me</h2>
          <p>Let me introduce myself.</p>
        </Link>

        <Link href="/" className={styles.card}>
          <h2>Work experience</h2>
          <p>Lets discover where did I worked previously and what I did there!</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
        >
          <h2>Demos</h2>
          <p>Wanna see some of my work? Lets go!</p>
        </Link>
      </section>
    </div>
  );
}