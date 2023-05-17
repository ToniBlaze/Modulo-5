import CommentArea from "./CommentArea";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function SingleBook(props) {
  
  function selectBook() {
    if (props.selected) {
      props.onClick(null);
    } else {
      props.onClick(props.book.asin);
    }
  }
  return (
    <Col sm={10} md={8} lg={5} xxl={4} className="mb-5 py-3">
      <Card
      className={props.selected ? "border border-3 border-danger" : ""}
      onClick={selectBook}>
        <Card.Img variant="top" className="custom-img-height" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>Categoria: {props.book.category}</Card.Text>
          <Card.Text>Asin: <b>{props.book.asin}</b></Card.Text>
          <Card.Text>Prezzo: <b>{props.book.price}€</b></Card.Text>
          <Button className="mt-3" variant="success">Acquista</Button>
          {props.selected && <CommentArea id={props.book.asin}/>}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
