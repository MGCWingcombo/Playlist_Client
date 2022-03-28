import styled from "styled-components";
import device from "../../styleds/GlobalStyle";

export const Con = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`;

export const Header = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    background: #fdfdfd;
    box-shadow: 0px 0px 10px 1px rgb(0, 0, 0, 0.1);
  }
`;

export const PrevBtn = styled.button`
  background: white;
  border: none;
  margin-top: 1vw;
  img {
    width: 25px;
    height: 25px;
  }
`;

export const Logo = styled.div`
  width: 92px;
  height: 27px;
  margin-top: 2.3vw;
  margin-left: 28vw;
  img {
    width: 92px;
    height: 27px;
  }
`;

export const Top = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 200px;
  @media ${device.mobile} {
    justify-content: space-around;
    margin-top: 0px;
  }
`;

export const Number = styled.div`
  font-family: "Nanum Gothic";
  font-weight: 800;
  font-size: 3.4375rem;
  color: #6578a7;
  @media ${device.mobile} {
    font-size: 2.3rem;
    padding: 15px 30px 0 15px;
  }
`;

export const Count = styled.div`
  font-family: "Nanum Gothic";
  font-weight: 800;
  font-size: 1.25rem;
  padding-top: 35px;
  color: #909090;
  @media ${device.mobile} {
    font-size: 1rem;
    padding-left: 60px;
  }
`;

export const Questions = styled.div`
  font-family: "Nanum Gothic";
  font-weight: 800;
  font-size: 1.5rem;
  margin-top: 50px;
  @media ${device.mobile} {
    font-size: 1.3rem;
    margin: 50px 0;
    text-align: center;
    .oneQ {
      display: block;
    }
  }
`;

export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 400px;
  @media ${device.mobile} {
    margin-bottom: 150px;
  }
`;
