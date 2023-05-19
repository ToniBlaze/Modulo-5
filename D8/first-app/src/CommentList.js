import { Row, Container } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList(props) {
  return (
    <Container> 
    <Row className="pb-3">
      <hr></hr>
      <p className="text-black fs-4 mb-0">Commenti:</p>
      {props.data.map((item, index) => (
        <SingleComment item={item} key={index} />
      ))}
    </Row>
    </Container>
  );
}

export default CommentList;
