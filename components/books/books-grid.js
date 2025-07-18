import BookItem from './book-item';
import classes from './books-grid.module.css';

export default function BooksGrid({ books }) {
  return (
    <ul className={classes.books}>
      {books.map((book) => (
        <li key={book.id}>
          <BookItem {...book} />
        </li>
      ))}
    </ul>
  );
}