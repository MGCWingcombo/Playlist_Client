import styled from "styled-components";
import device from "../../Styles/constant";

export const Content = styled.div`
  display: flex;
`;

export const LeftImg = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  img {
    width: 270px;
    height: 470px;
  }
  @media ${device.mobile} {
    display: none;
  }
`;
export const RightImg = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  img {
    width: 320px;
    height: 650px;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const Contents = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Ment = styled.div`
  font-size: 2.2rem;
  font-family: "Nanum Gothic";
  font-weight: 800;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
  white-space: nowrap;
  display: inline;
  div {
    display: inline;
  }
  .mbti {
    font-family: "Prompt";
  }
  .playlist {
    font-family: "Prompt";
    color: #6578a7;
  }
  @media ${device.mobile} {
    font-size: 1.3rem;
    .middle {
      span {
        display: none;
      }
    }
    .playlist {
      display: block;
    }
  }
`;

export const backImage = styled.image`
  position: relative;
  margin-bottom: 9vh;
  .img {
    width: 470px;
    height: 350px;
  }
  @media ${device.mobile} {
    .img {
      width: 270px;
      height: 200px;
    }
  }
`;

export const Btn = styled.button`
  font-family: "Nanum Gothic";
  font-weight: 700;
  background: #6578a7;
  color: white;
  font-size: 1.4rem;
  width: 450px;
  height: 70px;
  border: 1px solid #6578a7;
  border-radius: 50px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 310px;
    height: 50px;
    font-size: 1rem;
  }
`;

export const Btnwrap = styled.div`
  margin-bottom: 4vh;
  @media ${device.mobile} {
    margin-top: 4vh;
  }
`;
