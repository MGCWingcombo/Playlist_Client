import styled from "styled-components";
import device from "../../styleds/constant";
export const Content = styled.div`
  width: 100%;
  height: 1570px;
  @media ${device.mobile} {
    margin-top: 50px;
    height: 1100px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 90px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.1);
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media ${device.mobile} {
    display: none;
  }
`;

export const Logo = styled.div`
  img {
    width: 200px;
    height: 60px;
  }
  margin-right: 500px;
`;

export const Button = styled.button`
  margin-left: 500px;
  font-family: "Prompt";
  width: 210px;
  height: 45px;
  font-size: 1.3rem;
  color: white;
  background: #6578a7;
  border: 1px solid #6578a7;
  border-radius: 10px;
  cursor: pointer;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 12vh;

  .subtitle {
    font-family: "Prompt";
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 30px;
    padding-left: 10vw;
  }
  @media ${device.mobile} {
    padding: 0 5px;
    .subtitle {
      font-family: "Prompt";
      font-size: 1.1rem;
      font-weight: 700;
    }
  }
`;

export const Cardlist = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media ${device.mobile} {
    overflow-y: hidden;
    overflow-x: auto;
    width: 100%;
    justify-content: stretch;
  }
`;

export const Condition_Contents = styled.div`
  display: none;
  .subtitle_mbti {
    font-family: "Prompt";
    font-size: 1.1rem;
    font-weight: 700;
    padding-top: 3vh;
    padding-left: 3.7vh;
    margin-bottom: 0;
  }
  @media ${device.mobile} {
    display: block;
  }
`;

export const Btn = styled.div`
  padding-left: 1.5vh;
  img {
    width: 43vh;
  }
`;
