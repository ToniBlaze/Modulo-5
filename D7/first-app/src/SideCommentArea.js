import { useEffect, useState } from "react";
import CommentList from "./CommentList";

function SideCommentArea(props) {
  const [data, setData] = useState([]);
  console.log(props);
  console.log(data);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.selectedBook}`,
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
  }, [props]);

  return (
    <div>
      <CommentList data={data} />
    </div>
  );
}

export default SideCommentArea;
