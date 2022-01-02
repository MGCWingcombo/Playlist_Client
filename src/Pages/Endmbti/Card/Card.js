import React from "react";
import * as S from "./Style";

const Card = ({ keys }) => {
  return (
    <>
      <S.Card>
        Artist : {keys.Artist}
        <br />
        Music_title : {keys.Music}
        <br />
        <a href={keys.url} target="_blank">
          url : {keys.url}
        </a>
      </S.Card>
    </>
  );
};

export default Card;
