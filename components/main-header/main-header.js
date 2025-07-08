import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';


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
            <NavLink href="/books">Browse Books</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}