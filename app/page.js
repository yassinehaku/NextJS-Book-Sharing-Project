import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/slider/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
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