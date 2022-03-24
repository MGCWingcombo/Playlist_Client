import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
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
  padding-top: 140px;
  p {
    font-family: "Prompt";
    font-weight: 600;
    font-size: 1rem;
  }
  .subtitle {
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 30px;
    padding-left: 165px;
  }
`;

export const Cardlist = styled.div`
  display: flex;
  margin: 0 100px;
  justify-content: space-evenly;
`;
