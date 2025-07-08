import Image from 'next/image';

import bookIcon from '@/assets/icons/book.jpg';
import communityIcon from '@/assets/icons/community.jpg';
import eventsIcon from '@/assets/icons/events.jpg';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Books</span>
        </h1>
        <p>Join our community and share your favorite reads!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={bookIcon} alt="A stack of books" />
            <p>Share & discover new books</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A group of people discussing books" />
            <p>Find fellow book lovers & like-minded readers</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A group of people at a book event"
            />
            <p>Participate in book clubs & author events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
