import { useState } from "react";
import CommentArea from "./CommentArea";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function SingleBook(props) {
  const [clicked, setClicked] = useState(false);

  function selectBook() {
    setClicked(!clicked);
    if (clicked) {
    props.onClick(props.book.asin)
    } else {
      props.onClick({})
    }
  }

  return (
    <Col sm={10} md={8} lg={5} xxl={4} className="mb-5 py-3">
      <Card
      className={clicked ? "border border-3 border-danger" : ""}
      onClick={selectBook}>
        <Card.Img variant="top" className="custom-img-height" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>Categoria: {props.book.category}</Card.Text>
          <Card.Text>Asin: <b>{props.book.asin}</b></Card.Text>
          <Card.Text>Prezzo: <b>{props.book.price}€</b></Card.Text>
          <Button className="mt-3" variant="success">Acquista</Button>
          {clicked && <CommentArea id={props.book.asin}/>}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
