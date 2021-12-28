import React, { useState } from "react";
import * as S from "./TextBtnStyle";
const ChoiceBtn = () => {
  return (
    <>
      <S.ChoiceBtn
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
    </>
  );
};

export default ChoiceBtn;
