import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateClick() {
    navigate("/mbti");
  }

  return (
    <>
      <S.Header>
        <S.Logo>
          <img
            src={require("../../assets/playlistlogo.png")}
            alt="playlistlogo"
          />
        </S.Logo>
        <S.Button onClick={navigateClick}>MBTI 검사하기</S.Button>
      </S.Header>
    </>
  );
};

export default Home;
