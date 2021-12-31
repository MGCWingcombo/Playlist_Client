import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as S from "./Style";
import Card from "./Card/Card";

const Endmbti = () => {
  const [error, setError] = useState(null);

  const location = useLocation();
  const props = location.state.mbti;

  const mbtilist = (data) => {
    const datalist = data.filter((아무말) => 아무말.id === props);
    console.log(datalist);
  };

  useEffect(() => {
    const holder = async () => {
      try {
        setError(null);

        console.log(props);
        await axios
          .get("https://jsonplaceholder.typicode.com/posts?_start=0&_end=5")
          .then((res) => {
            let data = res.data;
            console.log(data);
            mbtilist(data);
            console.log("성공");
          })
          .catch((err) => {
            console.log("실패");
            setError(err);
            throw err;
          });
      } catch (e) {
        if (error) return <div>에러가 발생했습니다.</div>;
      }
    };

    holder();
  }, []);

  return (
    <>
      {/* <table>
        <tbody>
          {datalist.map((data) => (
            <tr key={data.id}>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
};

export default Endmbti;

// let test = JSON.stringify(mbtis, ["id", "title"], 3);

// <Card keys={list.id}></Card>

// {mbtilist.map((props) => (
//   <Card keys={props.title}></Card>
// ))}

//.get(`http://localhost:8080/playlist/${props}`)
