import React from "react";
import * as S from "./Style";

const Card = ({ keys }) => {
  return (
    <>
      <S.Card>
        <a href={keys.url} target="_blank">
          <S.Img>
            <div></div>
          </S.Img>
          <p className="Artist">{keys.Artist}</p>
          <p className="Music">{keys.Music}</p>
        </a>
      </S.Card>
    </>
  );
};

export default Card;
