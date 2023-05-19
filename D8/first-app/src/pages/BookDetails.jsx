import React from "react";
//import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import Horror from "../categorie/horror.json";

export default function BookDetails() {
  //const [book, setBook] = useState();
  const navigate = useNavigate();

  //Torna ad Home
  const backToHome = () => {
    navigate("/");
  };

  //Prendi "ID" da paramentro della ROUTE
  let { id } = useParams();

  // Trova il libro corrispondente all'ASIN
  const book = Horror.find((elem) => elem.asin === id);

  return (
    <Container fluid>
      <Row>
        <Col className="my-5">
          <Row>
            <BookInfo book={book} />
          </Row>
          <Button className="px-4 py-2 my-4" onClick={backToHome}>Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
}

function BookInfo({ book }) {
  const { asin, category, img, price, title } = book;
  return (
    <>
      <h1 className="mb-4">{title}</h1>
      <Col sm={4} className="mx-0">
        <img
          className="img-fluid img-custom-book-details"
          src={img}
          alt="img-book"
        />
      </Col>
      <Col sm={7}>
        <h5>{category}</h5>
        <h5>{asin}</h5>
        <h4>{price}</h4>
      </Col>
    </>
  );
}
