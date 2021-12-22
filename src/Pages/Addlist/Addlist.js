import React from "react";
import * as S from "./Style";
import SideMbti from "../../Components/SideMbti/SideMbti";

const Addlist = () => {
  const onClick = () => {
    console.log("hi");
  };
  return (
    <>
      <S.Content>
        <div className="left">
          <SideMbti />
        </div>
        <S.Contents>
          <S.Ment>
            <div>좋아하는 노래가 그날그날 바뀌는</div>
            <div>당신을 위한 플레이리스트는</div>
          </S.Ment>
          <S.backImage>
            <img className="img" src={require("../../assets/mbtiImg.png")} />
            <span>ENFP</span>
          </S.backImage>
          <S.Btn onClick={onClick}>내 플레이리스트에 추가하기</S.Btn>
        </S.Contents>
        <div className="right">
          <SideMbti />
        </div>
      </S.Content>
    </>
  );
};

export default Addlist;
