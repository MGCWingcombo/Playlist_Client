import React, { useState } from "react";
import * as S from "./Style";

const Question = () => {
  const [number, setNumber] = useState(1);

  const nextCount = () => {
    setNumber((nextNumber) => nextNumber + 1);
  };

  return (
    <>
      <S.Content>
        <S.Top>
          <S.Number>Q{number}.</S.Number>
          <S.Count>{number} / 12</S.Count>
        </S.Top>

        <S.Questions>
          오랜만에 찾아온 휴일, 당신이 원하는 휴식 방법은?
        </S.Questions>

        <S.Btns>
          <S.ChoiceBtn
            onClick={nextCount}
            className="topbtn"
            fontcolor="#ffffff"
            btncolor="#6578a7"
            bordercolor="#6578a7"
          >
            집에서 혼자만의 시간을 가진다.
          </S.ChoiceBtn>
          <S.ChoiceBtn
            className="bottomBtn"
            fontcolor="#000000"
            btncolor="#ffffff"
            bordercolor="#c4c4c4"
          >
            사람들과 만나서 즐거운 시간을 보낸다.
          </S.ChoiceBtn>
        </S.Btns>
      </S.Content>
    </>
  );
};

export default Question;
