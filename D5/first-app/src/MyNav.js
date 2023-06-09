import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useState } from "react";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");

  // Funzione per gestire il cambiamento dell'input di ricerca
  function handleInputChange(event) {
    const inputValue = event.target.value;
    setSearchText(inputValue);
    props.onQueryChange(inputValue);
    console.log(inputValue);
  }

  return (
    <input
      type="text"
      className="text-center"
      placeholder="*** Cerca i libri ***"
      value={searchText}
      onChange={handleInputChange}
    />
  );
}

function MyNav(props) {

  //funzione che passa lo stato al componente superiore
  function handleQueryChange(value) {
    props.onQueryChange(value);
  }


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <i className="bi bi-yin-yang fs-2 px-3 text-light"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
            <NavDropdown title="Categorie" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dramatic</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchBar onQueryChange={handleQueryChange} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
