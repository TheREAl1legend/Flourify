import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flourify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Welcome! To FLOURIFY</h1>
          <p>"Get Flour and Oil products delivered to your doorstep!"</p>
          <a href="#" className={styles.btn}>Explore Now →</a>
        </section>
      </main>
      <Footer />
    </>
  );
}

// components/Navbar.js
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logzo.jpeg" alt="Flourify Logo" width="125" />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/flour">Flour</Link></li>
        <li><Link href="/oil">Oil</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

// components/Footer.js
export default function Footer() {
  return (
    <footer className="footer">
      <p>Copyright © 2024 Flourify. All rights reserved.</p>
    </footer>
  );
}
