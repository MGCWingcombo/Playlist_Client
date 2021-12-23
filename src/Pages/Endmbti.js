import React, { useState, useEffect } from "react";
import axios from "axios";

const Endmbti = () => {
  const [mbtis, setMbtis] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const holder = async () => {
      try {
        setError(null);
        setMbtis(null);
        await axios
          .get("https://jsonplaceholder.typicode.com/posts?_start=0&_end=5", {
            params: {
              id: 1,
            },
          })
          .then((res) => {
            setMbtis(res.data);
            console.log("성공");
          })
          .catch((err) => {
            console.log("실패");
            setError(err);
            throw err;
          });
      } catch (e) {
        return <div>에러가 발생했습니다.</div>;
      }
    };

    holder();
  }, []);

  var keys = JSON.stringify(mbtis, ["id", "title"], 2);

  return (
    <div>{mbtis && <textarea rows={7} value={keys} readOnly={true} />}</div>
  );
};

export default Endmbti;
