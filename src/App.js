import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Search from "./Search";
import Dashboard from "./Dashboard";
import * as BooksAPI from "./BooksAPI";
import PropTypes from "prop-types";

/**
 * @description BooksApp which renders the Dashboard or Search page depending on the route
 */
class BooksApp extends React.Component {
 static propTypes = {
  books: PropTypes.array,
  error: PropTypes.string,
  loaded: PropTypes.bool,
 };

 /**
  * @description States of the BooksApp
  * @param {array} books - Collection of books
  * @param {string} error - The author of the book
  */
 state = {
  books: [],
  error: null,
  loaded: false,
 };
 /**
  * @description Sorts the books by the shelf name
  * @return {array} a filtered array of books by its shelf name
  * @param {array} books - Collection of books
  * @param {string} shelf - the name of the shelf
  */
 arrangeShelf = (books, shelf) => {
  return books.filter((book) => book.shelf === shelf);
 };

 /**
  * @description A function that removes an object from it's previous shelf
  * @return {array}  a filtered array of books by its shelf name
  * @param {array} books - Collection of books
  * @param {object} oldBook - A book object
  */
 removeFromShelf = (books, oldBook) => {
  return books.filter((book) => book !== oldBook);
 };

 /**
  * @description gets a collection of books from the Books Api and puts them in the
  * books state if available, if not, it updates the error state that something happened
  * the loaded state is also updated depending on whether or not the information was loaded correctly
  * @return {void} an array of books
  */
 getAllBooks = () => {
  BooksAPI.getAll()
   .then((books) => {
    if (!books) {
     this.setState({
      error: books.error,
      loaded: false,
     });
    }
    this.setState({
     loaded: true,
     books,
     error: null,
    });
   })
   .catch((error) => {
    console.error(error);
    this.setState({ error: "Oops. Something went Wrong" });
   });
 };

 /**
  * @description removes the object from the previous shelf and adds it to the new shelf as well as updates
  * the books API that this change has occurred for data persistence
  * @return {void}
  * @param {object} book - A book
  * @param {string} shelf- A Shelf
  */
 updateBookShelf = (book, shelf) => {
  const oldBooks = this.removeFromShelf(this.state.books, book);
  book.shelf = shelf;
  this.setState({
   books: [...oldBooks, book],
  });
  BooksAPI.update(book, shelf).catch((error) => {
   console.log(error);
   this.setState({ error: "Oops. Something went Wrong" });
  });
 };

 /**
  * @description  Finds if the book has a shelf, if not assign it a None value
  * @return {string}  The shelf name
  * @param {object} book - A book
  */
 getBookStatus = (book) => {
  const FoundBook = this.state.books.find(
   (bookShelf) => bookShelf.title === book.title
  );
  return FoundBook ? FoundBook.shelf : "None";
 };

 /**
  * @description  updates the state by calling the getallbook after the component is mounted
  */
 componentDidMount = () => {
  this.getAllBooks();
 };
 render() {
  const { error, loaded, books, results } = this.state;
  //creating an array that list the books and shelves
  const ListOfBooksAndShelves = [
   {
    title: "Currently Reading",
    books: this.arrangeShelf(books, "currentlyReading"),
    shelf: "currentlyReading",
   },
   {
    title: "Want to Read",
    books: this.arrangeShelf(books, "wantToRead"),
    shelf: "wantToRead",
   },
   { title: "Read", books: this.arrangeShelf(books, "read"), shelf: "read" },
  ];
  return (
   <div>
    <Route
     exact
     path="/"
     render={() => (
      <Dashboard
       error={error}
       loaded={loaded}
       ListOfBooksAndShelves={ListOfBooksAndShelves}
       updateBookShelf={this.updateBookShelf}
      />
     )}
    />
    <Route
     exact
     path="/search"
     render={() => (
      <Search
       updateBookShelf={this.updateBookShelf}
       getBookStatus={this.getBookStatus}
       results={results}
      />
     )}
    />
   </div>
  );
 }
}

export default BooksApp;
