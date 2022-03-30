import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";
import Mob_header from "../../Components/mobile_header/Mob_header";

import RepeatHomeCon from "./M_Card/Home_Component/repeat_Home_con";
const Home = () => {
  const navigate = useNavigate();

  function navigateClick() {
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
          <S.Button onClick={navigateClick}>MBTI 검사하기</S.Button>
        </S.Header>

        <Mob_header prevBtn={false} />

        <RepeatHomeCon />
      </S.Content>
    </>
  );
};

export default Home;
