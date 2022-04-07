import React from "react";
import { cardWord1, cardWord2, cardWord3 } from "./data";
import { Cardlist, Contents } from "../../Style";
import Card from "../../M_Card/Card";
const repeat_Home_con = () => {
  const word1 = cardWord1.map((list) => {
    return <Card key={list.id} word={list.word} img={list.img} />;
  });
  const word2 = cardWord2.map((list) => {
    return <Card key={list.id} word={list.word} img={list.img} />;
  });
  const word3 = cardWord3.map((list) => {
    return <Card key={list.id} word={list.word} img={list.img} />;
  });
  return (
    <>
      <Contents>
        <p className="subtitle">계절로 알아보는 플레이리스트</p>
        <div>
          <Cardlist>{word1}</Cardlist>
        </div>
        <p className="subtitle">날씨로 알아보는 플레이리스트</p>
        <Cardlist>{word2}</Cardlist>
        <p className="subtitle">기분으로 알아보는 플레이리스트</p>
        <Cardlist>{word3}</Cardlist>
      </Contents>
    </>
  );
};

export default repeat_Home_con;
