import classes from "@/app/books/page.module.css";
import BooksGrid from "@/components/books/books-grid";
import Link from "next/link";

export default function BooksPage (){
    return (
    <>
    <header className={classes.header }>
        <h1>
            Perfect Books, suggested <span className={classes.highlight}> by you </span>
        </h1>
        <p>Share your favourite book with the community</p>
        <p className={classes.cta}>
            <Link href="/books/share">
                Share your suggested book
            </Link>
        </p>
    </header>
    <main className={classes.main}>
        <BooksGrid books ={[]}/>
    </main>
    </>
);
}