import React from "react";
import * as S from "./Style";
const Question = ({ fontcolor, btncolor }) => {
  return (
    <>
      <S.Content>
        <S.Top>
          <S.Number>Q1.</S.Number>
          <S.Count>1 / 12</S.Count>
        </S.Top>

        <S.Questions>
          오랜만에 찾아온 휴일, 당신이 원하는 휴식 방법은?
        </S.Questions>

        <S.ChoiceBtn fontcolor="#ffffff" btncolor="#6578a7">
          집에서 혼자만의 시간을 가진다.
        </S.ChoiceBtn>
        <S.ChoiceBtn fontcolor="#000000" btncolor="#ffffff">
          사람들과 만나서 즐거운 시간을 보낸다.
        </S.ChoiceBtn>
      </S.Content>
    </>
  );
};

export default Question;
