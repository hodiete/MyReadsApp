import React from "react";
import "./App.css";
import Authors from "./Authors";
import SelectOptions from "./SelectOptions";
import PropTypes from "prop-types";

/**
 * @description  A book component consistinh of image, title, author and select options
 *
 */
class Book extends React.Component {
 static propTypes = {
  bookItem: PropTypes.object,
  getBookStatus: PropTypes.func,
  updateBookShelf: PropTypes.func,
 };

 /**
  * @description  Checks if the shelf has change for the a book and calls the update bookshelf function
  * to update the book and its shelf
  * @param {object} book   A book
  * @param {string} shelf A shelf
  *
  */
 handleShelfChange = (book, shelf) => {
  if (shelf === null) {
   delete book[shelf];
  } else if (book.shelf !== shelf) {
   this.props.updateBookShelf(book, shelf);
  }
 };
 render() {
  const { bookItem, getBookStatus } = this.props;
  // seeting a default image if no image is found on the book object
  const defaultImage =
   " http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api";

  return (
   <React.Fragment>
    <li>
     <div className="book">
      <div className="book-top">
       <div
        className="book-cover"
        style={{
         width: 128,
         height: 193,
         backgroundImage:
          bookItem.imageLinks === undefined
           ? `url(
             ${defaultImage}
             )`
           : `url(${bookItem.imageLinks.thumbnail})`,
        }}
       />
       <SelectOptions
        book={bookItem}
        handleShelfChange={this.handleShelfChange}
        getBookStatus={getBookStatus}
       />
      </div>
      <div className="book-title">{bookItem.title}</div>

      <Authors authors={!bookItem.authors ? [] : bookItem.authors} />
     </div>
    </li>
   </React.Fragment>
  );
 }
}

export default Book;
