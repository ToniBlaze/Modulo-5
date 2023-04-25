import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Horror from "./categorie/horror.json";
import SingleBook from "./SingleBook";



function LatestRelease() {
  return (
    <Container fluid className="my-5">
      <Row className="d-flex justify-content-center gap-2">
        {
        Horror.map((book, i) => (
          <SingleBook book={book} key={i} />
        ))
        }
      </Row>
    </Container>
  );
}
export default LatestRelease;