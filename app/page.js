import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/books"> Books </Link></p>
      <p><Link href="/books/share"> Share Book </Link></p>
      <p><Link href="/community"> Community </Link></p>
    </main>
  );
}
