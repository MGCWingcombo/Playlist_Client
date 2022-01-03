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
        const res = await axios(`http://localhost:8080/playlist/${props}`);
        // console.log(res.data.data[0]);
        // console.log(res.data.data[0].Artist);
        setMbtis(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    holder();
  }, []);

  function dataplus() {
    console.log("hi");
    const data3 = document.getElementsByClassName("third-data");
    data3.style.display = data3.style.display != "none" ? "none" : "block";
  }

  return (
    <>
      <S.All>
        <S.Content>
          <S.Top>
            <S.Ment>{props}를 위한 플레이리스트</S.Ment>
            <S.Button onClick={dataplus}>더보기</S.Button>
          </S.Top>
          <S.Data>
            <S.Contents>
              <div>
                {mbtis && <Card keys={mbtis[0]} />}
                {mbtis && <Card keys={mbtis[1]} />}
                {mbtis && <Card keys={mbtis[2]} />}
                {mbtis && <Card keys={mbtis[3]} />}
              </div>
            </S.Contents>
            <S.Contents>
              <div>
                {mbtis && <Card keys={mbtis[4]} />}
                {mbtis && <Card keys={mbtis[5]} />}
                {mbtis && <Card keys={mbtis[6]} />}
                {mbtis && <Card keys={mbtis[7]} />}
              </div>
            </S.Contents>
            <S.Contents>
              <div className="third-data">
                {mbtis && <Card keys={mbtis[8]} />}
                {mbtis && <Card keys={mbtis[9]} />}
                {mbtis && <Card keys={mbtis[10]} />}
                {mbtis && <Card keys={mbtis[11]} />}
              </div>
            </S.Contents>
          </S.Data>
        </S.Content>
      </S.All>
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
