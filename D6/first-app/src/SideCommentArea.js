import { useEffect, useState } from "react";
import CommentList from "./CommentList";

function SideCommentArea(props) {
  const [data, setData] = useState([]);
  console.log(props);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props}`,
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
  }, [props]);

  return (
    <div>
      <CommentList data={data} />
    </div>
  );
}

export default SideCommentArea;
