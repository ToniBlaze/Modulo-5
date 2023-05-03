import { Row } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList(props) {
  return (
    <Row className="pb-3">
      <hr></hr>
      <p className="text-secondary mb-0">Commenti:</p>
      {props.data.map((item, index) => (
        <SingleComment item={item} key={index} />
      ))}
    </Row>
  );
}

export default CommentList;
