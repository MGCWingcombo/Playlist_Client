import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as S from "./Style";
import Card from "./Card/Card";

const Endmbti = () => {
  const [mbtis, setMbtis] = useState("");
  const location = useLocation();
  const props = location.state.mbti;

  useEffect(() => {
    const holder = async () => {
      try {
        console.log(props);
        const res = await axios(
          "https://jsonplaceholder.typicode.com/posts?_start=0&_end=12"
        );
        console.log(res.data);
        setMbtis(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    holder();
  }, []);

  // function mbtilist() {
  //   console.log("mbti : ", mbtis);
  //   const mbti4 = mbtis.filter((아무말) => 아무말.id <= 4);
  //   console.log("mbti4 : ", mbti4);
  // }

  return (
    <>
      <S.Ment>{props}를 위한 플레이리스트</S.Ment>
      {/* {mbtis && mbtilist()}
      <S.Contents>
        {mbtis && mbtis.map((mbti) => <Card key={mbti.id} keys={mbti} />)}
      </S.Contents> */}
      <S.Content>
        <S.Contents>
          {mbtis && <Card keys={mbtis[0]} />}
          {mbtis && <Card keys={mbtis[1]} />}
          {mbtis && <Card keys={mbtis[2]} />}
          {mbtis && <Card keys={mbtis[3]} />}
        </S.Contents>
        <S.Contents>
          {mbtis && <Card keys={mbtis[4]} />}
          {mbtis && <Card keys={mbtis[5]} />}
          {mbtis && <Card keys={mbtis[6]} />}
          {mbtis && <Card keys={mbtis[7]} />}
        </S.Contents>
      </S.Content>
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
