import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";
const Card = ({ word, img, name }) => {
  const navigate = useNavigate();
  const navigateClick = () => {
    navigate("/recommend-list", { state: { list: name } });
  };

  return (
    <>
      <S.Card onClick={navigateClick}>
        <S.Img>
          <img src={img} alt="test" />
        </S.Img>
        <p className="card_sentence">{word} 듣기 좋은 플레이리스트</p>
      </S.Card>
    </>
  );
};

export default Card;
