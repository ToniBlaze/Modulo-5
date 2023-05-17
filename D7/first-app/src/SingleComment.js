import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const API = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODQxNzEyMDgsImV4cCI6MTY4NTM4MDgwOH0.bZuyoNmPlcnbMRuSYMYp2IGq8rkWap6RA8Lhq-ejszY`;

function SingleComment(props) {
  const [comments, setComments] = useState([props.item]);

  async function deleteComment(e, commentId) {
    e.preventDefault();
    e.stopPropagation();

    try {
      await fetch(`${API}${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const updatedComments = comments.filter(
        (comment) => comment._id !== commentId
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Error:", error);
    }
  }

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
        <Button
          onClick={(e) => deleteComment(e, props.item._id)}
          className="btn btn-danger">
          Elimina
        </Button>
      </Row>
    </div>
  );
}

export default SingleComment;
