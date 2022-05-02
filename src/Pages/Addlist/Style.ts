import styled from "styled-components";
import device from "../../Styles/constant";
export const Content = styled.div`
  display: flex;
  .left {
    margin-left: 20px;
    @media ${device.mobile} {
      display: none;
    }
  }
  .right {
    margin-right: 20px;
    @media ${device.mobile} {
      display: none;
    }
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Contents = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .btn {
    height: 60px;
    margin-bottom: 300px;
  }
  @media ${device.mobile} {
    margin-top: 60px;
    position: fixed;
  }
`;

export const Ment = styled.div`
  font-size: 1.8rem;
  font-family: "Nanum Gothic";
  font-weight: 800;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  @media ${device.mobile} {
    margin-top: 150px;
    font-size: 1.3rem;
    .change {
      font-size: 0px;
    }
    .change2 {
      display: none;
    }
    .change::before {
      font-size: 1.3rem;
      content: "매일";
    }
  }
`;

export const backImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    height: 250px;
  }
  span {
    font-size: 2rem;
    font-family: "Prompt";
    font-weight: 900;
    color: white;
    position: absolute;
  }

  @media ${device.mobile} {
    margin: 75px 0 85px;
    img {
      width: 190px;
      height: 190px;
    }
  }
`;

export const Btn = styled.button`
  font-family: "Nanum Gothic";
  font-weight: 700;
  background: #6578a7;
  color: white;
  font-size: 1.4rem;
  width: 400px;
  height: 60px;
  border: 1px solid #6578a7;
  border-radius: 50px;
  margin-bottom: 30vh;
  p {
    margin: 10px 0;
  }
  cursor: pointer;
  @media ${device.mobile} {
    width: 320px;
    height: 50px;
    border-radius: 5px;
    p {
      font-size: 0px;
    }
    p::before {
      font-size: 1.1rem;
      content: "추천 플레이리스트 보기";
    }
  }
`;
