import React, { useState } from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";
import Card from "./M_Card/Card";

const Home = () => {
  const navigate = useNavigate();

  function navigateClick() {
    navigate("/mbti");
  }
  const cardWord = [
    { id: 1, word: "지금계절" },
    { id: 2, word: "봄" },
    { id: 3, word: "여름" },
    { id: 4, word: "가을" },
    { id: 5, word: "겨울" },
  ];

  const subtitleWord = [
    { id: 1, word: "계절" },
    { id: 2, word: "날씨" },
    { id: 3, word: "기분" },
  ];

  return (
    <>
      <S.Content>
        <S.Header>
          <S.Logo>
            <img
              src={require("../../assets/playlistlogo.png")}
              alt="playlistlogo"
            />
          </S.Logo>
          <S.Button onClick={navigateClick}>MBTI 검사하기</S.Button>
        </S.Header>
        <S.Contents>
          {subtitleWord.map((sub) => {
            return (
              <p className="subtitle" key={sub.id}>
                {sub.word}로 알아보는 플레이리스트
              </p>
            );
          })}
          <S.Cardlist>
            {cardWord.map((list) => {
              return <Card key={list.id} word={list.word} />;
            })}
          </S.Cardlist>
          {/* <p className="subtitle">계절로 알아보는 플레이리스트</p>
          <S.Cardlist>
            {cardWord.map((list) => {
              return <Card key={list.id} word={list.word} />;
            })}
          </S.Cardlist>
          <p className="subtitle">계절로 알아보는 플레이리스트</p>
          <S.Cardlist>
            {cardWord.map((list) => {
              return <Card key={list.id} word={list.word} />;
            })}
          </S.Cardlist> */}
        </S.Contents>
      </S.Content>
    </>
  );
};

export default Home;

{
  /* {[...Array(5).map((i) => {})]} */
}

{
  /* <Card word="지금 계절" />
            <Card word="봄" />
            <Card word="여름" />
            <Card word="가을" />
            <Card word="겨울" /> */
}
