import React from "react";
import * as S from "./Style";

const Card = ({ word, img }) => {
  return (
    <>
      <S.Card>
        <S.Img>
          <img src={img} alt="test" />
        </S.Img>
        <p className="card_sentence">{word} 듣기 좋은 플레이리스트</p>
      </S.Card>
    </>
  );
};

export default Card;
