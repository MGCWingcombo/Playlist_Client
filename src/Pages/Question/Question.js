import React from "react";
import * as S from "./Style";
const Question = () => {
  return (
    <>
      <S.Content>
        <S.Top>
          <S.Number></S.Number>
          <S.Count></S.Count>
        </S.Top>

        <S.Questions></S.Questions>
        <S.ChoiceBtn></S.ChoiceBtn>
        <S.ChoiceBtn></S.ChoiceBtn>
      </S.Content>
    </>
  );
};

export default Question;
