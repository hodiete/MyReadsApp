import React from "react";
import PropTypes from "prop-types";
/**
 * @description A select component that has a select tag and a list of options available
 * i.e. currently Reading , want to read and read
 */
class SelectOptions extends React.Component {
 static propTypes = {
  handleShelfChange: PropTypes.func,
  book: PropTypes.object,
  getBookStatus: PropTypes.func,
 };
 /**
  * @description  Listens to each option change and then calls the handleshelf change in book to update the state according 
  * assigning the book a new shelf name
  * @return {void}
  * @param {object} e   The event object

  *
  */
 handleShelfChange = (e) => {
  this.props.handleShelfChange(this.props.book, e.target.value);
 };
 render() {
  const { book, getBookStatus } = this.props;
  //array with the title and corresponding shelf name
  const options = [
   { title: "Currently Reading", shelf: "currentlyReading" },
   { title: "Want to Read", shelf: "wantToRead" },
   { title: "Read", shelf: "read" },
   { title: "None", shelf: null },
  ];

  return (
   <React.Fragment>
    <div className="book-shelf-changer">
     <select
      onChange={this.handleShelfChange}
      value={book.shelf === undefined ? getBookStatus(book) : book.shelf}>
      <option value="move" disabled>
       Move to...
      </option>
      {options.map((option, i) => (
       <option key={i} value={option.shelf}>
        {option.title}
       </option>
      ))}
     </select>
    </div>
   </React.Fragment>
  );
 }
}

export default SelectOptions;
