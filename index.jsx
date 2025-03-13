import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Flourify</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <h1>Welcome to Flourify</h1>
        <p>"Get Flour and Oil products delivered to your doorstep!"</p>
        <Link href="/products"><a>Explore Now →</a></Link>
      </header>
    </>
  );
}