import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import SingleBook from "./SingleBook";

function BookFilter(props) {
  function handleBookClick(book) {
    props.onBookSelect(book.asin);
  }




  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {
        props.books.map((book, i) => (
          <SingleBook 
          book={book} 
          key={i}
          onClick={() => handleBookClick(book)}
          />
        ))
        }
      </Row>
    </Container>
  );
}

export default BookFilter;
