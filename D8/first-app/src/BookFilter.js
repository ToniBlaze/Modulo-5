import React from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import SingleBook from "./SingleBook";

function BookFilter(props) {

  const [selectedBook, setSelectedBook] = useState(null);

  function handleBookClick(book) {
    props.onBookSelect(book.asin);
    setSelectedBook(book.asin)
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
          selected={selectedBook === book.asin}
          />
        ))
        }
      </Row>
    </Container>
  );
}

export default BookFilter;
