import React from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

/**
 * @description Search Component which has a query to search for each component in the BooksApi
 * contains an error state for error handling and an array to list the results based on the query
 */

class Search extends React.Component {
 static propTypes = {
  query: PropTypes.string,
  error: PropTypes.string,
  result: PropTypes.array,
 };
 state = {
  query: "",
  error: null,
  results: [],
 };

 /**
  * @description  gets the list of search items based on the query, if the query is empty
  * the results wil be empty, if the book isn't found the error handler will update accordingly and
  * if the book is found then the results state wil be updated
  * @param {string} query   query item to be searched
  *
  */
 getSearchItems = (query) =>
  query === ""
   ? this.setState({
      results: [],
     })
   : BooksAPI.search(query)
      .then((books) =>
       books.error
        ? this.setState({
           results: [],
           error: "Sorry, No Books Found",
          })
        : this.setState({
           results: [...books],
           error: null,
          })
      )
      .catch((error) => {
       console.error(error);
       this.setState({ error: "Oops. Something went Wrong" });
      });

 /**
  * @description  listens for when the input has been updated and then updates the state
  * of the query
  * @param {object} e event object
  *
  */
 handleChange = (e) => {
  this.setState({
   query: e.target.value,
  });
 };

 componentDidUpdate(prevProps, prevState) {
  if (prevState.query !== this.state.query) {
   this.getSearchItems(this.state.query);
  }
 }

 render() {
  const { query, error, results } = this.state;
  const { updateBookShelf, getBookStatus } = this.props;
  return (
   <div className="app">
    <div className="search-books">
     <div className="search-books-bar">
      <Link className="close-search" to="/">
       Close
      </Link>

      <div className="search-books-input-wrapper">
       <input
        type="text"
        placeholder="Search by title or author"
        value={query}
        onChange={this.handleChange}
       />
      </div>
     </div>
     {error ? (
      <div className="search-books-results"> {error} </div>
     ) : (
      <div className="search-books-results">
       {results.length > 0 && <div> {results.length} books Found</div>}
       <ol className="books-grid">
        {results.map((result, i) => (
         <Book
          key={i}
          bookItem={result}
          updateBookShelf={updateBookShelf}
          getBookStatus={getBookStatus}
         />
        ))}
       </ol>
      </div>
     )}
    </div>
   </div>
  );
 }
}

export default Search;
