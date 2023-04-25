import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Horror from "./categorie/horror.json";
function LatestRelease() {
  return (
    <Container fluid className="my-5">
      <Row className="d-flex justify-content-center gap-2">
        {
        Horror.map((elem, i) => (
          <Col sm={12} md={8} lg={4} xl={3} key={i}>
            <Card>
              <Card.Img variant="top" src={elem.img} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Text>
                  Categoria: {elem.category}
                </Card.Text>
                <Card.Text>
                  Asin: {elem.asin}
                </Card.Text>
                <Card.Text>
                  Prezzo: {elem.price}
                </Card.Text>
                <Button variant="success">Acquista</Button>
              </Card.Body>
            </Card>
          </Col>
        ))
        }
      </Row>
    </Container>
  );
}
export default LatestRelease;