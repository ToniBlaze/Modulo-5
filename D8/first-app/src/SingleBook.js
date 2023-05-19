import CommentArea from "./CommentArea";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


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
          <Card.Text>Categoria: <b>{props.book.category}</b></Card.Text>
          <Card.Text>Asin: <b>{props.book.asin}</b></Card.Text>
          <Card.Text>Prezzo: <b>{props.book.price}€</b></Card.Text>
          <Button className="my-3" variant="success">
            <Link className="text-decoration-none text-light" to={`/param-route/${props.book.asin}`} >
            Vedi dettagli
            </Link>
            </Button>
          {props.selected && <CommentArea id={props.book.asin}/>}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
