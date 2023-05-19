import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

const API = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODQxNzEyMDgsImV4cCI6MTY4NTM4MDgwOH0.bZuyoNmPlcnbMRuSYMYp2IGq8rkWap6RA8Lhq-ejszY`;

function SingleComment({item, index, setCommentsCount}) {
  const [comments, setComments] = useState([item]);

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
    setCommentsCount(prevCount => prevCount + 1)
  }

  return (
    <div key={index}>
      <p className="mb-0 mt-3">
        Autore: <b className="text-secondary">{item.author}</b>
      </p>
      <Row>
        <Col>
          <b className="text-secondary">"{item.comment}"</b>
        </Col>
        <Col>
          Rate: <b className="text-body">{item.rate}</b>
        </Col>
        <Button
          onClick={(e) => deleteComment(e, item._id)}
          className="btn btn-danger">
          Elimina
        </Button>
      </Row>
    </div>
  );
}

export default SingleComment;
