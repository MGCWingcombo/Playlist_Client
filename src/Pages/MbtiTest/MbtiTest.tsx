import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

const MbtiTest = () => {
  const navigate = useNavigate();
  const navigateClick:
    | React.MouseEventHandler<HTMLDivElement>
    | undefined = () => {
    navigate("/mbti-test");
  };

  return (
    <>
      <S.Content>
        <S.LeftImg>
          <img src={require("../../Assets/leftbuble.png")} alt="leftbuble" />
        </S.LeftImg>
        <S.Contents>
          <S.Ment>
            <div className="mbti">MBTI</div>
            <div className="middle">
              로 알아보는 <span>나의</span>{" "}
            </div>
            <div className="playlist">PLAYLIST</div>
          </S.Ment>
          <S.backImage>
            <img
              className="img"
              src={require("../../Assets/TheBandShow.png")}
              alt="teststartimg"
            />
          </S.backImage>
          <S.Btnwrap>
            <div onClick={navigateClick}>
              <S.Btn>나와 맞는 플레이리스트 찾으러 가기</S.Btn>
            </div>
          </S.Btnwrap>
        </S.Contents>
        <S.RightImg>
          <img src={require("../../Assets/rightbuble.png")} alt="rightbuble" />
        </S.RightImg>
      </S.Content>
    </>
  );
};

export default MbtiTest;
