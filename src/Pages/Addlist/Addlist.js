import React, { useEffect } from "react";
import * as S from "./Style";
import SideMbti from "../../Components/SideMbti/SideMbti";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Mob_header from "../../Components/mobile_header/Mob_header";

const Addlist = ({}) => {
  const location = useLocation();

  console.log(location.state.mbti);
  const navigate = useNavigate();
  function navigateClick() {
    navigate("/recommend-list", { state: { mbti: location.state.mbti } });
  }

  // useEffect(() => {
  //   console.log("hi");
  // }, [location]);

  return (
    <>
      <S.Content>
        <Mob_header />
        <div className="left">
          <SideMbti />
        </div>
        <S.Contents>
          <S.Ment>
            <div>
              좋아하는 노래가 <span className="change">그날그날</span> 바뀌는
            </div>
            <div>
              당신을 위한 플레이리스트<span className="change2">는</span>
            </div>
          </S.Ment>
          <S.backImage>
            <img
              className="img"
              src={require("../../assets/mbtiImg.png")}
              alt="mbtibackimg"
            />
            <span>{location.state.mbti}</span>
          </S.backImage>
          <div className="btn" onClick={navigateClick}>
            <S.Btn>
              <p>나의 추천 플레이리스트 보러가기</p>
            </S.Btn>
          </div>
        </S.Contents>
        <div className="right">
          <SideMbti />
        </div>
      </S.Content>
    </>
  );
};
export default Addlist;
