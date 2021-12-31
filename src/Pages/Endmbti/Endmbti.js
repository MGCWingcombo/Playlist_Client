import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as S from "./Style";
import Card from "./Card/Card";

const Endmbti = () => {
  const [mbtis, setMbtis] = useState();
  const location = useLocation();
  const props = location.state.mbti;

  // const mbtilist = (data) => {
  //   setMbtis(data);
  //   console.log(mbtis);
  //   // const datalist = data.filter((아무말) => 아무말.id === props);
  //   // console.log(datalist);
  //   // return datalist;
  // };

  useEffect(() => {
    const holder = async () => {
      try {
        console.log(props);
        const res = await axios(
          "https://jsonplaceholder.typicode.com/posts?_start=0&_end=5"
        );
        console.log(res.data);
        setMbtis(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    holder();
  }, []);

  return (
    <>
      <h1>hi</h1>

      {mbtis && mbtis.map((mbti) => <Card key={mbti.id} keys={mbti} />)}
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

{
  /* <ul>
        {mbtis &&
          mbtis.map((mbti) => (
            <li key={mbti.id}>
              {mbti.title} ({mbti.body})
            </li>
          ))}
      </ul> */
}

{
  /* <table>
        <tbody>
          {mbtis &&
            mbtis.map((data) => (
              <tr key={data.id}>
                <td>{data.title}</td>
                <td>{data.body}</td>
              </tr>
            ))}
        </tbody>
      </table> */
}
