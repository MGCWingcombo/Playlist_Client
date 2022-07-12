import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as S from "./Style";
import Card from "../../Components/EndmbtiCard/Card";
import Mobheader from "../../Components/Mobile_header/Mobheader";
import { useRecoilState, useSetRecoilState } from "recoil";
import { EndmbtiState } from "../../Atoms/Atom";
import EndmbtiData from "../../Components/EndmbtiData/EndmbtiData";
const API_KEY = process.env.REACT_APP_PLAYLIST_KEY;

const Endmbti = () => {
  const [mbtis, setMbtis] = useRecoilState(EndmbtiState);
  const [number, setNumber] = useState<number>(1);
  const location: any = useLocation();

  const props: string = location.state.list;
  const otherbtn: boolean = location.state.otherbtn;
  const word: string = location.state.word;

  const url = `${API_KEY}${props}`;
  // const url = `http://52.78.85.15:8080/playlist${props}`;
  useEffect(() => {
    const holder = async () => {
      try {
        const res = await axios(url);
        setMbtis(res.data.data);
        console.log(res.data.data);
        console.log("res : ", res);
      } catch (error) {
        console.error(error);
      }
    };

    holder();
    console.log(location);
    console.log("props : ", props);
    console.log("otherbtn : ", otherbtn);
    console.log("word : ", word);
  }, []);

  const dataplus = () => {
    setNumber((num) => num + 1);

    const data1: any = document.getElementById("first_data");
    const data2: any = document.getElementById("second_data");
    const data3: any = document.getElementById("third_data");
    const data4: any = document.getElementById("force_data");
    switch (number) {
      case 1:
        data1.style.display = data1.style.display !== "none" ? "flex" : "none";
        break;
      case 2:
        data2.style.display = data2.style.display !== "none" ? "flex" : "none";
        break;
      case 3:
        data3.style.display = data3.style.display !== "none" ? "flex" : "none";
        break;
      case 4:
        data4.style.display = data4.style.display !== "none" ? "flex" : "none";
        break;
      default:
        return null;
    }
  };

  return (
    <S.Rall>
      <S.Logo>
        <a href="/">
          <img
            src={require("../../Assets/playlistlogo.png")}
            alt="playlistlogo"
          />
        </a>
      </S.Logo>

      <Mobheader prevBtn={true} />
      <S.All>
        <S.Content>
          <S.Top>
            <S.Ment>
              {otherbtn
                ? `${word}에 듣기 좋은 플레이리스트`
                : `${props}를 위한 플레이리스트`}
            </S.Ment>
            {mbtis && <S.Button onClick={dataplus}>더보기</S.Button>}
          </S.Top>
          <EndmbtiData />
          <a className="btn" href="/">
            <S.Btn fontcolor="#6578a7" btncolor="#ffffff" bordercolor="#6578a7">
              {otherbtn ? "다른 플레이리스트 보러가기" : "MBTI 검사 다시하기"}
            </S.Btn>
          </a>
        </S.Content>
      </S.All>
    </S.Rall>
  );
};

export default Endmbti;
