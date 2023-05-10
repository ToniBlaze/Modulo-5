import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const API = `https://striveschool-api.herokuapp.com/api/comments/`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODI3NzA1OTMsImV4cCI6MTY4Mzk4MDE5M30.ShMsEPRyUGBQkh0IP0Oysi_i3ezVbUh_MdKrgdRpey8`;

function AddComment(props) {
  const [comment, setComment] = useState([]);
  const [show, setShow] = useState(false);
  const [review, setReview] = React.useState("");
  const [rating, setRating] = React.useState("");


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

    let newComment = {
      comment: review,
      rate: rating,
      elementId: props.id,
    };

    // SE IL VALORE E' VALIDO FAI CHIAMATA ALTRIMENTI MOSTRA ALERT E SVUOTA "RATING"
    if (rating >= 1 && rating <= 5) {
      //CHIAMATA API
      fetch(API, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      })
        .then((reponse) => reponse.json())
        .then((data) => {
          setComment([...comment, data]);
          handleClose();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Il valore del rating deve essere compreso tra 1 e 5.");
      setRating("");
    }
  }

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

      {/* MODALE */}
      <Modal show={show} onClick={handleClose}>
        <Modal.Header onClick={(e) => e.stopPropagation()}>
          <Modal.Title>Inserisci recensione</Modal.Title>
        </Modal.Header>

        <Modal.Body onClick={(e) => e.stopPropagation()}>

          {/* FORM */}
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
                min={1}
                max={5}
                value={rating}
                onChange={handleRatingChange}
                onClick={(e) => e.stopPropagation()}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Invia recensione
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer onClick={(e) => e.stopPropagation()}>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddComment;
