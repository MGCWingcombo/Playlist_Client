import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";
import { cardWord } from "../../Pages/Main/M_Card/Home_Component/data";

interface Cards extends cardWord {
  otherbtn: boolean;
}

const Card = ({ word, img, name, otherbtn }: Cards) => {
  const navigate = useNavigate();
  const navigateClick = () => {
    navigate("/recommend-list", { state: { list: name, otherbtn, word } });
  };
  return (
    <>
      <S.Card onClick={navigateClick}>
        <S.Img>
          <img src={img} alt="test" />
        </S.Img>
        <p className="card_sentence">{word} 추천 플레이리스트</p>
      </S.Card>
    </>
  );
};

export default Card;
