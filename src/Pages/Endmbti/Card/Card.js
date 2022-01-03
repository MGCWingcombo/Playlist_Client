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
          <br />
          Artist : {keys.Artist}
          <br />
          Music_title : {keys.Music}
        </a>
      </S.Card>
    </>
  );
};

export default Card;
