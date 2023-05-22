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
    <Col xs={11} sm={6} md={4} lg={3} xxl={3} className="mb-5 py-3">
      <Card
        className={props.selected ? "border border-3 border-danger single-book" : "single-book"}
        onClick={selectBook}>
        <Card.Img
          variant="top"
          className="custom-img-height"
          src={props.book.img}
        />
        <Card.Body>
          <Card.Title className="mb-3">{props.book.title}</Card.Title>
          <Card.Text className="mb-1">
            Categoria: <b>{props.book.category}</b>
          </Card.Text>
          <Card.Text className="mb-1">
            Asin: <b>{props.book.asin}</b>
          </Card.Text>
          <Card.Text className="mb-1">
            Prezzo: <b>{props.book.price}€</b>
          </Card.Text>
          <Link
            className="text-decoration-none text-light"
            to={`/${props.book.category}/${props.book.asin}`}
            onClick={handleClick}>
            <Button className="mt-2" variant="success">
              Vedi dettagli
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
