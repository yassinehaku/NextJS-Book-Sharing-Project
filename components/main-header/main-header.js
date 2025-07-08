import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';


export default function MainHeader() {
  return (
    <>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
      <Image src={logoImg} alt=" kids reading a book" priority/>
        Books Lovers
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/books">Browse Books</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}