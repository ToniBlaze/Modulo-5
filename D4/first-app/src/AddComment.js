import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const API = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODI3NzA1OTMsImV4cCI6MTY4Mzk4MDE5M30.ShMsEPRyUGBQkh0IP0Oysi_i3ezVbUh_MdKrgdRpey8`;

function AddComment(props) {
  // const [comment, setComment] = useState({ author: "", comment: "", rate: 1 });
  const [comment, setComment] = useState([]);
  const [show, setShow] = useState(false);

  // CHIUSURA MODALE
  function handleClose(e) {
    setShow(false);
    e.preventDefault();
    e.stopPropagation();
  }

  //APERTURA DEL MODALE
  function handleShow(e) {
    setShow(true);
    e.preventDefault();
    e.stopPropagation();
  }

  // GESTISCI INVIO FORM
  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const newComment = {
      elementId: props.id,
      comment: review,
      rate: rating,
    };

    //CHIAMATA API
    fetch(API, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODI3NzA1OTMsImV4cCI6MTY4Mzk4MDE5M30.ShMsEPRyUGBQkh0IP0Oysi_i3ezVbUh_MdKrgdRpey8",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        setComment({ ...comment, newComment, data });
      });

    handleClose();
  }

  const [review, setReview] = React.useState("");
  const [rating, setRating] = React.useState("");

  function handleReviewChange(e) {
    setReview(e.target.value);
  }

  function handleRatingChange(e) {
    setRating(e.target.value);
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Aggiungi commento
      </Button>

      <Modal show={show} onClick={(e) => e.stopPropagation()}>
        <Modal.Header>
          <Modal.Title>Inserisci recensione</Modal.Title>
        </Modal.Header>

        <Modal.Body onClick={(e) => e.stopPropagation()}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Scrivi recensione"
                onChange={handleReviewChange}
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Valutazione (da 1 a 5)</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                onChange={handleRatingChange}
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Invia recensione
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddComment;
