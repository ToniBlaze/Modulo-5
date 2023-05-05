import { Row, Col } from "react-bootstrap";

function SingleComment(props) {
    // console.log(props)
  return (
    <div key={props.index}>
      <p className="mb-0 mt-3">
        Autore: <b className="text-secondary">{props.item.author}</b>
      </p>
      <Row>
        <Col>
          <b className="text-secondary">"{props.item.comment}"</b>
        </Col>
        <Col>
          Rate: <b className="text-body">{props.item.rate}</b>
        </Col>
      </Row>
    </div>
  );
}

export default SingleComment;
