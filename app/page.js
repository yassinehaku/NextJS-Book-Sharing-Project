// import Link from "next/link";

// export default function Home() {
//   return (
//     <main>
//       <h1 style={{ color: 'white', textAlign: 'center' }}>
//         Time to get started!
//       </h1>
//       <p><Link href="/books"> Books </Link></p>
//       <p><Link href="/books/share"> Share Book </Link></p>
//       <p><Link href="/community"> Community </Link></p>
//     </main>
//   );
// }
import Link from 'next/link';

import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>NEXTLEVEL BOOKS FOR NEXTLEVEL READERS</h1>
            <p>Discover & share books from everywhere.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Books</Link>
          </div>
        </div>
      </header>
      <main>
      <section className={classes.section}>
  <h2>How it works</h2>
  <p>
    NextLevel Books is a platform for book lovers to share their favorite
    reads with the world. It&apos;s a place to discover new titles, and to
    connect with other book enthusiasts.
  </p>
  <p>
    NextLevel Books is a place to discover new titles, and to connect
    with other book enthusiasts.
  </p>
</section>

<section className={classes.section}>
  <h2>Why NextLevel Books?</h2>
  <p>
    NextLevel Books is a platform for book lovers to share their favorite
    reads with the world. It&apos;s a place to discover new titles, and to
    connect with other book enthusiasts.
  </p>
  <p>
    NextLevel Books is a place to discover new titles, and to connect
    with other book enthusiasts.
  </p>
</section>

      </main>
    </>
  );
}