import styled from "styled-components";
import device from "../../styleds/GlobalStyle";
export const Content = styled.div`
  width: 100%;
  height: 1570px;
`;

export const Header = styled.header`
  width: 100%;
  height: 140px;
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
    width: 230px;
    height: 70px;
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
  p {
    font-family: "Prompt";
    font-weight: 600;
    font-size: 1rem;
  }
  .subtitle {
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 30px;
    padding-left: 6vw;
  }
  @media ${device.mobile} {
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
    margin: 0;
  }
`;

export const Condition_Contents = styled.div`
  display: none;
  p {
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
