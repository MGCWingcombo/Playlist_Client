import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";
import Mob_header from "../../Components/mobile_header/Mob_header";
import RepeatHomeCon from "./M_Card/Home_Component/repeat_Home_con";

const Home = () => {
  const navigate = useNavigate();

  function mbtitest() {
    navigate("/mbti");
  }

  return (
    <>
      <S.Content>
        <S.Header>
          <S.Logo>
            <img
              src={require("../../assets/playlistlogo.png")}
              alt="playlistlogo"
            />
          </S.Logo>
          <S.Button onClick={mbtitest}>MBTI 검사하기</S.Button>
        </S.Header>

        <Mob_header prevBtn={false} />
        <S.Condition_Contents>
          <p className="subtitle_mbti">MBTI로 알아보는 플레이리스트</p>
          <S.Btn onClick={mbtitest}>
            <img src={require("../../assets/mbtiBtn.png")} alt="mbti_button" />
          </S.Btn>
        </S.Condition_Contents>
        <RepeatHomeCon />
      </S.Content>
    </>
  );
};

export default Home;
