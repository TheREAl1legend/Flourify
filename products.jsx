mport Link from 'next/link';

export default function Products() {
  return (
    <>
      <h1>Our Products</h1>
      <ul>
        <li><Link href="/flour">Flour</Link></li>
        <li><Link href="/oil">Oil</Link></li>
        <li><Link href="/others">Others</Link></li>
      </ul>
    </>
  );
}