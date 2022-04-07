import styled from "styled-components";
import device from "../../styleds/constant";

export const Con = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  @media ${device.mobile} {
    margin-top: 50px;
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

    span {
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
