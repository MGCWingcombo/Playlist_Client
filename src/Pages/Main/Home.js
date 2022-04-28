import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";
import Mobheader from "../../Components/Mobile_header/Mobheader";
import RepeatHomeCon from "./M_Card/Home_Component/Repeat_Home_con";

const Home = () => {
  const navigate = useNavigate();

  const mbtitest = () => {
    navigate("/mbti");
  };

  return (
    <>
      <S.Content>
        <S.Header>
          <S.Logo>
            <a href="/">
              <img
                src={require("../../Assets/playlistlogo.png")}
                alt="playlistlogo"
              />
            </a>
          </S.Logo>

          <S.Button onClick={mbtitest}>MBTI 검사하기</S.Button>
        </S.Header>
        {/* 데스크톱 헤더 */}

        <Mobheader prevBtn={false} />
        {/* 모바일 헤더 */}

        <S.Condition_Contents>
          <p className="subtitle_mbti">MBTI로 알아보는 플레이리스트</p>
          <S.Btn onClick={mbtitest}>
            <img src={require("../../Assets/mbtiBtn.png")} alt="mbti_button" />
          </S.Btn>
        </S.Condition_Contents>
        {/* 모바일 버튼 */}

        <RepeatHomeCon />
        {/* 콘텐츠 */}
        <S.Footer>
          <p className="copyright">© 2022 PLAYLIST. All Rights Reserved</p>
          <br />
          <p>
            <a
              href="https://github.com/MGCWingcombo"
              target="_blank"
              rel="noreferrer"
            >
              About{" "}
            </a>
            |
            <a
              href="https://github.com/MGCWingcombo/Playlist_Client/blob/master/LICENSE"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Lisence{" "}
            </a>
            |
            <a
              href="https://github.com/MGCWingcombo"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github and issue
            </a>
          </p>
        </S.Footer>
      </S.Content>
    </>
  );
};

export default Home;
