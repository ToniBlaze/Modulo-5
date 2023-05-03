import { useState } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import CommentArea from "./CommentArea";

function SingleBook(props) {
  const [selected, setSelected] = useState(false);

  function selectBook() {
      setSelected(!selected);
  }

  return (
    <Col sm={10} md={6} lg={4} xxl={4} className="mb-5 py-3">
      <Card
      className={selected ? "border border-3 border-danger" : ""}
      onClick={selectBook}>
        <Card.Img variant="top" className="custom-img-height" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>Categoria: {props.book.category}</Card.Text>
          <Card.Text>Asin: <b>{props.book.asin}</b></Card.Text>
          <Card.Text>Prezzo: <b>{props.book.price}€</b></Card.Text>
          {selected && <CommentArea id={props.book.asin}/>}
          <Button className="mt-3" variant="success">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
