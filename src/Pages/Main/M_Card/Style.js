import styled from "styled-components";
import device from "../../../styleds/GlobalStyle";
export const Card = styled.div`
  width: 275px;
  height: 310px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #b6b6b6;
  margin: 18px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Prompt";
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    padding-top: 5px;
  }
  @media ${device.mobile} {
    width: 250px;
    height: 220px;
    box-shadow: 0px 0px 5px #b6b6b6;
    margin: 7px;
  }
`;

export const Img = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px; */
  width: 200px;
  height: 200px;
  img {
    width: 200px;
    height: 200px;
  }

  @media ${device.mobile} {
    width: 160px;
    height: 160px;
    img {
      width: 160px;
      height: 160px;
    }
  }
`;
