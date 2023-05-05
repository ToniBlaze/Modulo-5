import { useEffect, useState } from "react";
import CommentList from "./CommentList"
import AddComment from "./AddComment";

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
    <>
    <CommentList data={data} />
    <AddComment id={props.id}/>
    </>
  );
}
export default CommentArea;

