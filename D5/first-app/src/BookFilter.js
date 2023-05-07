import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Horror from "./categorie/horror.json";
import SingleBook from "./SingleBook";

function BookFilter(props) {
  console.log(props.query);

  // Creazione del nuovo array di libri filtrati in base al testo di ricerca
  const filteredBooks = Horror.filter((book) =>
    book.title.toLowerCase().includes(props.query.toLowerCase())
  );

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-5">
        {
        filteredBooks.map((book, i) => (
          <SingleBook book={book} key={i} />
        ))
        }
      </Row>
    </Container>
  );
}

export default BookFilter;
