import React from "react";
import { useRecoilValue } from "recoil";
import { EndmbtiState } from "../../Atoms/Atom";
import Card from "../EndmbtiCard/Card";
import styled from "styled-components";
import device from "../../Styles/constant";

const EndmbtiData = () => {
  const mbtis = useRecoilValue(EndmbtiState);
  return (
    <Data>
      <div className="mobileview">
        <Contents>
          <div>
            {mbtis && <Card keys={mbtis[0]} />}
            {mbtis && <Card keys={mbtis[1]} />}
            {mbtis && <Card keys={mbtis[2]} />}
            {mbtis && <Card keys={mbtis[3]} />}
          </div>
        </Contents>
        <Contents>
          <div>
            {mbtis && <Card keys={mbtis[4]} />}
            {mbtis && <Card keys={mbtis[5]} />}
            {mbtis && <Card keys={mbtis[6]} />}
            {mbtis && <Card keys={mbtis[7]} />}
          </div>
        </Contents>
      </div>
      <Contents className="one">
        <div id="first_data" className="first_data">
          {mbtis && <Card keys={mbtis[8]} />}
          {mbtis && <Card keys={mbtis[9]} />}
          {mbtis && <Card keys={mbtis[10]} />}
          {mbtis && <Card keys={mbtis[11]} />}
        </div>
      </Contents>
      <Contents className="two">
        <div id="second_data" className="second_data">
          {mbtis && <Card keys={mbtis[12]} />}
          {mbtis && <Card keys={mbtis[13]} />}
          {mbtis && <Card keys={mbtis[14]} />}
          {mbtis && <Card keys={mbtis[15]} />}
        </div>
      </Contents>
      <Contents className="three">
        <div id="third_data" className="third_data">
          {mbtis && <Card keys={mbtis[16]} />}
          {mbtis && <Card keys={mbtis[17]} />}
          {mbtis && <Card keys={mbtis[18]} />}
          {mbtis && <Card keys={mbtis[19]} />}
        </div>
      </Contents>
      <Contents className="force">
        <div id="force_data" className="force_data">
          {mbtis && <Card keys={mbtis[20]} />}
          {mbtis && <Card keys={mbtis[21]} />}
          {mbtis && <Card keys={mbtis[22]} />}
          {mbtis && <Card keys={mbtis[23]} />}
        </div>
      </Contents>
    </Data>
  );
};

const Contents = styled.div`
  div {
    display: flex;
  }
  .first_data {
    display: none;
  }
  .second_data {
    display: none;
  }
  .third_data {
    display: none;
  }
  .force_data {
    display: none;
  }
`;

const Data = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 20px;
  height: 760px;

  @media ${device.mobile} {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100vw;
    height: auto;
    .mobileview {
      display: flex;
      padding: 0 35px;
    }
  }
`;
export default EndmbtiData;
