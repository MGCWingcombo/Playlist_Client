import React from "react";
import * as S from "./Style";
import SideMbti from "../../Components/SideMbti/SideMbti";
const MbtiTest = () => {
  return (
    <>
      <S.Content>
        <div className="left">
          <SideMbti />
        </div>
        <S.Contents>
          <S.Ment>
            <div className="mbti">MBTI</div>
            <div>로 알아보는 나의</div>
            <div className="playlist"> PLAYLIST</div>
          </S.Ment>
          <S.backImage>
            <img
              className="img"
              src={require("../../assets/teststart.png")}
              alt="teststartimg"
            />
          </S.backImage>
          <S.Btn>나와 맞는 플레이리스트 찾으러 가기</S.Btn>
        </S.Contents>
        <div className="right">
          <SideMbti />
        </div>
      </S.Content>
    </>
  );
};

export default MbtiTest;
