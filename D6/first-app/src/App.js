import "./App.css";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";
import BookFilter from "./BookFilter";
import SideCommentArea from "./SideCommentArea";

import Horror from "./categorie/horror.json";

function App() {
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(-1);

  function handleInputChange(value) {
    setQuery(value);
    console.log(value);
  }

  function handleBookSelect(asin) {
    console.log(asin);
    setSelectedBook(asin);
  }

  // Creazione del nuovo array di libri filtrati in base al testo di ricerca
  const filteredBooks = Horror.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <MyNav onQueryChange={handleInputChange} />
      <Welcome />
      <Container fluid>
        <Row>
          <Col xs={8}>
            <BookFilter books={filteredBooks} onBookSelect={handleBookSelect} />
          </Col>

          <Col xs={4}>
            <SideCommentArea selectedBook={selectedBook} />
          </Col>
        </Row>
      </Container>
      <hr />
      <MyFooter />
    </div>
  );
}

export default App;
