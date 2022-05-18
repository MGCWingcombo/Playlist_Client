import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import * as S from "./Style";
import Card from "../../Components/EndmbtiCard/Card";
import Mobheader from "../../Components/Mobile_header/Mobheader";

const API_KEY = process.env.REACT_APP_PLAYLIST_KEY;

const Endmbti = () => {
  const [mbtis, setMbtis] = useState<any>("");
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
          <S.Data>
            <div className="mobileview">
              <S.Contents>
                <div>
                  {mbtis && <Card keys={mbtis[0]} />}
                  {mbtis && <Card keys={mbtis[1]} />}
                  {mbtis && <Card keys={mbtis[2]} />}
                  {mbtis && <Card keys={mbtis[3]} />}
                </div>
              </S.Contents>
              <S.Contents>
                <div>
                  {mbtis && <Card keys={mbtis[4]} />}
                  {mbtis && <Card keys={mbtis[5]} />}
                  {mbtis && <Card keys={mbtis[6]} />}
                  {mbtis && <Card keys={mbtis[7]} />}
                </div>
              </S.Contents>
            </div>
            <S.Contents className="one">
              <div id="first_data" className="first_data">
                {mbtis && <Card keys={mbtis[8]} />}
                {mbtis && <Card keys={mbtis[9]} />}
                {mbtis && <Card keys={mbtis[10]} />}
                {mbtis && <Card keys={mbtis[11]} />}
              </div>
            </S.Contents>
            <S.Contents className="two">
              <div id="second_data" className="second_data">
                {mbtis && <Card keys={mbtis[12]} />}
                {mbtis && <Card keys={mbtis[13]} />}
                {mbtis && <Card keys={mbtis[14]} />}
                {mbtis && <Card keys={mbtis[15]} />}
              </div>
            </S.Contents>
            <S.Contents className="three">
              <div id="third_data" className="third_data">
                {mbtis && <Card keys={mbtis[16]} />}
                {mbtis && <Card keys={mbtis[17]} />}
                {mbtis && <Card keys={mbtis[18]} />}
                {mbtis && <Card keys={mbtis[19]} />}
              </div>
            </S.Contents>
            <S.Contents className="force">
              <div id="force_data" className="force_data">
                {mbtis && <Card keys={mbtis[20]} />}
                {mbtis && <Card keys={mbtis[21]} />}
                {mbtis && <Card keys={mbtis[22]} />}
                {mbtis && <Card keys={mbtis[23]} />}
              </div>
            </S.Contents>
          </S.Data>
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
