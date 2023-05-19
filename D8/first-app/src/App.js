import "./App.css";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import BookFilter from "./BookFilter";

import Horror from "./categorie/horror.json";

import ErrorPage from "./pages/ErrorPage"
import BookDetails from "./pages/BookDetails";

function App() {
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(-1);

  function handleInputChange(value) {
    setQuery(value);
    console.log(value);
  }

  function handleBookSelect(asin) {
    setSelectedBook(asin);
  }

  // Creazione del nuovo array di libri filtrati in base al testo di ricerca
  const filteredBooks = Horror.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <BrowserRouter>
        <MyNav onQueryChange={handleInputChange} />

        <Routes>
          <Route
            index element={
              <Container fluid>
                <Row>
                  <Col xs={12}>
                    <BookFilter
                      books={filteredBooks}
                      onBookSelect={handleBookSelect}
                    />
                  </Col>
                </Row>
              </Container>
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="param-route/:id" element={<BookDetails/>} />
        </Routes>
      </BrowserRouter>
      <hr />
      <MyFooter />
    </div>
  );
}

export default App;
