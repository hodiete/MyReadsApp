import React from "react";
import PropTypes from "prop-types";

/**
  * @description  Author component which creates the book authors
  * @return {object} return authors
  * @param {array} authors  List of Authors

  *
  */
function Authors({ authors }) {
 return (
  <React.Fragment>
   {authors.map((author, i) => (
    <div key={i} className="book-authors">
     {author}
    </div>
   ))}
  </React.Fragment>
 );
}

Authors.propTypes = {
 authors: PropTypes.array.isRequired,
};

export default Authors;
