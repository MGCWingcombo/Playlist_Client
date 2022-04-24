import styled from "styled-components";
import device from "../../Styles/constant";
export const Content = styled.div`
  width: 100%;
  height: 1500px;
  @media ${device.mobile} {
    margin-top: 50px;
    height: 1170px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background: #fdfdfd;
  box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.1);
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    display: none;
  }
`;

export const Logo = styled.div`
  margin-left: 5vh;
  img {
    width: 180px;
    height: 50px;
  }
`;

export const Button = styled.button`
  margin-right: 5vh;
  font-family: "Prompt";
  width: 160px;
  height: 45px;
  font-size: 1.2rem;
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
    font-size: 1.3rem;
    font-weight: 700;
    padding-top: 30px;
    padding-left: 12vw;
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
    padding-left: 10vw;
    margin-bottom: 0;
  }
  @media ${device.mobile} {
    display: block;
  }
`;

export const Btn = styled.div`
  img {
    width: 43vh;
  }
  display: flex;
  justify-content: center;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: nowrap;
  margin: 0;
  padding: 40px 30px 0 0;
  a {
    text-decoration: none;
    color: black;
  }
  p {
    margin: 0;
  }
  font-size: 0.9rem;

  @media ${device.mobile} {
    display: flex;

    align-items: center;
    padding: 0;
    padding: 40px 0 0 0;
    font-size: 0.75rem;
  }
`;
