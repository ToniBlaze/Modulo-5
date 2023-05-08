import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import SingleBook from "./SingleBook";

function BookFilter(props) {
  console.log(props.books);



  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5">
        {
        props.books.map((book, i) => (
          <SingleBook book={book} key={i} />
        ))
        }
      </Row>
    </Container>
  );
}

export default BookFilter;
