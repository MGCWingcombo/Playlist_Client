import React from "react";
import * as S from "./Style";

const Card = ({ keys }) => {
  return (
    <>
      <S.Card>
        id : {keys.id}
        <br />
        title : {keys.title}
      </S.Card>
    </>
  );
};

export default Card;
