import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

/**
 * @description  Dashboard contains the Myreadapp Bookshelves
 * @return {object} the dashboard with all the bookshelves
 * @param {string} error  error if available
 * @param {boolean} loaded when the app has loaded or not
 * @param {object} ListOfBooksAndShelves list the books and shelves
 * @param {function} updateBookShelf function that updates book shelf
 *
 */
function BookShelf({ books, title, loaded, updateBookShelf }) {
 return (
  <div className="bookshelf">
   {loaded && <h2 className="bookshelf-title">{title}</h2>}
   <div className="bookshelf-books">
    <ol className="books-grid">
     {books.length === 0 ? (
      <div> There are currently no books on this shelf</div>
     ) : (
      books.map((book, i) => (
       <Book
        key={i}
        bookItem={book}
        currentShelf={book.shelf}
        updateBookShelf={updateBookShelf}
       />
      ))
     )}
    </ol>
   </div>
  </div>
 );
}

BookShelf.propTypes = {
 books: PropTypes.array.isRequired,
 title: PropTypes.string.isRequired,
 loaded: PropTypes.bool,
 updateBookShelf: PropTypes.func.isRequired,
};

export default BookShelf;
