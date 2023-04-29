import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

function CommentArea(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM2ZjFkMjMzYjE1MjAwMTQ3NjE3OTYiLCJpYXQiOjE2ODI3NzA1OTMsImV4cCI6MTY4Mzk4MDE5M30.ShMsEPRyUGBQkh0IP0Oysi_i3ezVbUh_MdKrgdRpey8",
          },
        }
      );
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, [props.id]);

  return (
    <Row>
      <hr></hr>
      {data.map((item, index) => (
        <div key={index}>
        <p className="mb-0 mt-3">Autore: <b className="text-secondary">{item.author}</b></p>
        <Row>
            <Col><b className="text-secondary">"{item.comment}"</b></Col>
            <Col>Rate: <b className="text-body">{item.rate}</b></Col>
        </Row>
        </div>
      ))}
    </Row>
  );
}
export default CommentArea;
