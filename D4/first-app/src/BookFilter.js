import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Horror from "./categorie/horror.json";
import SingleBook from "./SingleBook";

function BookFilter() {
  const [searchText, setSearchText] = useState("");

  // Funzione per gestire il cambiamento dell'input di ricerca
  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  // Creazione del nuovo array di libri filtrati in base al testo di ricerca
  const filteredBooks = Horror.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Container>
      <Row className="d-flex justify-content-center gap-2">
        <label> {" "}
          <b>Cerca dei libri:</b>
        </label>
        <input
          type="text"
          className="text-center"
          placeholder="*** Cerca i libri ***"
          value={searchText}
          onChange={handleInputChange}
        />
      </Row>
      <Row className="d-flex justify-content-center gap-2 mt-5">
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
