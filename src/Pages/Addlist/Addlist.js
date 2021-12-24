import React, { useState } from "react";
import * as S from "./Style";
import SideMbti from "../../Components/SideMbti/SideMbti";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import Endmbti from "../Endmbti/Endmbti";

const Addlist = ({}) => {
  // const [first, setFirst] = useState(props);
  // const location = useLocation();
  // const props = location.state;
  // console.log(location);
  const navigate = useNavigate();
  function navigateClick() {
    navigate("/Addmbti/Endmbti", { state: { id: 2 } });
  }
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
            <img
              className="img"
              src={require("../../assets/mbtiImg.png")}
              alt="mbtibackimg"
            />
            <span>id : </span>
          </S.backImage>
          <div onClick={navigateClick}>
            <S.Btn>내 플레이리스트에 추가하기</S.Btn>
          </div>
        </S.Contents>
        <div className="right">
          <SideMbti />
        </div>
      </S.Content>
    </>
  );
};
// {() => {
//   navigate({
//     pathname: "./Addmbti/Endmbti",
//     state: { id: 1 },
//   });
// }}
export default Addlist;
