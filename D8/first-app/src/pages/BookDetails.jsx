import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// COMPONENTI
import CommentList from "../CommentList";
import AddCommentArea from "../AddCommentArea";

//JSON
import Horror from "../categorie/horror.json";



//PAGINA (ROUTE) PRINCIPALE DEL LIBRO
export default function BookDetails() {
  const navigate = useNavigate();

  //Torna ad Home
  const backToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  //Prendi "ID" da paramentro della ROUTE
  let { id } = useParams();

  // Trova il libro corrispondente all'ASIN
  const book = Horror.find((elem) => elem.asin === id);

  return (
    <Container fluid>
      <Row>
        <Col className="my-5">
          <Row>
            <BookInfo book={book} />
          </Row>
          <Button className="px-4 py-2 my-4 btn-secondary" onClick={backToHome}>
            Back to Home
          </Button>
          <Row>
            <Col xs={12}>
              <CommentArea2 id={id} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

// Sezione che mostra i dettagli del libro (Img, titolo, descrizione, prezzo ecc..)
function BookInfo({ book }) {
  const { asin, category, img, price, title } = book;
  return (
    <>
      <h1 className="mb-4">{title}</h1>
      <Col sm={4} className="mx-0">
        <img
          className="img-fluid img-custom-book-details"
          src={img}
          alt="img-book"
        />
      </Col>
      <Col sm={7}>
        <h3 className="mt-3">
          Categoria: <b>{category}</b>
        </h3>
        <h3 className="mt-3">
          Asin: <b>{asin}</b>
        </h3>
        <h3 className="mt-3">
          Prezzo: <b>{price}$</b>
        </h3>
        <p className="text-secondary mt-3">
          <span className="text-black pe-2">Descrizione:</span>
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a
            voluptate magni quam nihil animi laboriosam, ad nisi tempore ea
            eaque! Architecto, provident praesentium? Quasi perferendis mollitia
            unde illum consequatur Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Enim optio soluta facere totam quibusdam minima,
            cumque odit cupiditate laborum dolorem ad molestias nihil. Facilis
            commodi doloribus delectus nisi deserunt tempora Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dolorum cumque nulla ratione
            culpa, autem fugiat expedita error consequuntur aut in aperiam ipsa
            iure? Eveniet placeat mollitia tempora aliquam pariatur non.
          </i>
        </p>
      </Col>
    </>
  );
}

// Sezione che mostra i commenti degli utenti
function CommentArea2({ id }) {
  const [data, setData] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  // console.log(id);
  // console.log(data);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODQxNzEyMDgsImV4cCI6MTY4NTM4MDgwOH0.bZuyoNmPlcnbMRuSYMYp2IGq8rkWap6RA8Lhq-ejszY",
          },
        }
      );
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, [commentsCount]);

  return (
    <div>
      <hr></hr>
      <p className="text-black fs-4 fw-semibold mb-0">Recensioni:</p>
      <AddCommentArea id={id} setCommentsCount={setCommentsCount} />
      <CommentList data={data} setCommentsCount={setCommentsCount} />
    </div>
  );
}
