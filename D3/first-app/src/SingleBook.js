import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SingleBook(props) {
  return (
    <Col sm={12} md={8} lg={4} xl={3} className="mb-5 py-3">
      <Card>
        <Card.Img variant="top" className="custom-img-height" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>Categoria: {props.book.category}</Card.Text>
          <Card.Text>Asin: {props.book.asin}</Card.Text>
          <Card.Text>Prezzo: {props.book.price}</Card.Text>
          <Button variant="success">Acquista</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
