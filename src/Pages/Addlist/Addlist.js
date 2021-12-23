import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as S from "./Style";
import SideMbti from "../../Components/SideMbti/SideMbti";

// const mbtiData = [
//   {
//     mbti: "enfp",
//   },
//   {
//     mbti: "infp",
//   },
// ];

const Addlist = ({ id }) => {
  const [mbtis, setMbtis] = useState(null);
  const [error, setError] = useState(null);

  const holder = async () => {
    try {
      setError(null);
      setMbtis(null);
      await axios
        .get("https://jsonplaceholder.typicode.com/posts?_start=0&_end=5", {
          params: {
            id: id,
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

  var keys = JSON.stringify(mbtis, ["id", "title"], 2);

  return (
    <>
      <S.Content>
        <div className="left">
          <SideMbti />
        </div>
        <S.Contents>
          <S.Ment>
            <div>좋아하는 노래가 그날그날 바뀌는</div>
            <div>당신을 위한 플레이리스트는</div>
          </S.Ment>
          <S.backImage>
            <img className="img" src={require("../../assets/mbtiImg.png")} />
            <span>ID : {id}</span>
          </S.backImage>
          <Link to="Endmbti">
            <S.Btn>내 플레이리스트에 추가하기</S.Btn>
          </Link>
        </S.Contents>
        <div className="right">
          <SideMbti />
        </div>

        {mbtis && <p>{keys}</p>}
      </S.Content>
    </>
  );
};

export default Addlist;
