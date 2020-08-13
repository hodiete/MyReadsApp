import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
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
function Dashboard({ error, loaded, ListOfBooksAndShelves, updateBookShelf }) {
 return (
  <div className="app">
   <div className="list-books">
    <div className="list-books-title">
     <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
     <div className="bookshelf">
      {error && <div>{error}</div>}
      {loaded &&
       ListOfBooksAndShelves.map(({ title, books }, i) => (
        <BookShelf
         key={i}
         title={title}
         books={books}
         loaded={loaded}
         updateBookShelf={updateBookShelf}
        />
       ))}
      <div className="open-search">
       <Link className="open-search" to="/search">
        Add a book
       </Link>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

Dashboard.propTypes = {
 error: PropTypes.string,
 loaded: PropTypes.bool,
 ListOfBooksAndShelves: PropTypes.array.isRequired,
 updateBookShelf: PropTypes.func.isRequired,
};

export default Dashboard;
