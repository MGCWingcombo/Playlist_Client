import styled from "styled-components";
import device from "../../../styleds/constant";
export const Card = styled.div`
  min-width: 275px;

  min-height: 310px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #b6b6b6;
  margin: 18px 2.4vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .card_sentence {
    font-family: "Prompt";
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
    display: flex;
    justify-content: center;

    padding-top: 5px;
  }
  @media ${device.mobile} {
    min-width: 158px;
    min-height: 162px;
    max-width: 158px;
    max-height: 162px;
    box-shadow: 0px 0px 5px #b6b6b6;
    margin: 9px;
    .card_sentence {
      padding: 0 0 45px 0;
      font-size: 0.6rem;
      margin: 5px 0;
    }
  }
`;

export const Img = styled.div`
  margin-top: 10px;
  img {
    width: 200px;
    height: 200px;
  }

  @media ${device.mobile} {
    margin-top: 50px;
    img {
      max-width: 120px;
      max-height: 117px;
      min-width: 120px;
      min-height: 117px;
    }
  }
`;
