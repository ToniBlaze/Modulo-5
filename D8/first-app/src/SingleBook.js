import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function SingleBook(props) {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  function selectBook() {
    if (props.selected) {
      props.onClick(null);
    } else {
      props.onClick(props.book.asin);
    }
  }
  return (
    <Col xs={11} sm={6} md={4} lg={3} xxl={4} className="mb-5 py-3">
      <Card
        className={props.selected ? "border border-3 border-danger" : ""}
        onClick={selectBook}>
        <Card.Img
          variant="top"
          className="custom-img-height"
          src={props.book.img}
        />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            Categoria: <b>{props.book.category}</b>
          </Card.Text>
          <Card.Text>
            Asin: <b>{props.book.asin}</b>
          </Card.Text>
          <Card.Text>
            Prezzo: <b>{props.book.price}€</b>
          </Card.Text>
          <Button className="my-3" variant="success">
            <Link
              className="text-decoration-none text-light"
              to={`/param-route/${props.book.asin}`}
              onClick={handleClick}>
              Vedi dettagli
            </Link>
          </Button>
          {props.selected}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
