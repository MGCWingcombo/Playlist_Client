import styled from "styled-components";
import device from "../../styleds/constant";
export const Rall = styled.div`
  background: #f9f9f9;
  height: 100vh;
  @media ${device.mobile} {
    height: 300vh;
  }
`;

export const Logo = styled.div`
  width: 220px;
  height: 65px;
  img {
    width: 220px;
    height: 65px;
    padding-top: 3vh;
    padding-left: 5vw;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const All = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  .btn {
    margin: 40px auto 0px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Data = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 20px;
  height: 760px;
  @media ${device.mobile} {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    width: 1000px;
    height: auto;
  }
`;

export const Ment = styled.p`
  font-family: "Prompt";
  font-size: 1.9rem;
  font-weight: 500;
  color: #6c6f8c;
  margin-left: 50px;
  @media ${device.mobile} {
    font-size: 1.7rem;
    font-weight: 700;
    color: #6578a7;
  }
`;

export const Button = styled.button`
  font-family: "Prompt";
  color: #6c6f8c;
  background: white;
  font-size: 1.2rem;
  font-weight: 700;
  width: 100px;
  height: 40px;
  margin-top: 70px;
  margin-right: 30px;
  border-radius: 10px;
  border: 2px solid #6c6f8c;
  cursor: pointer;
  @media ${device.mobile} {
    display: none;
  }
`;

export const Btn = styled.button`
  font-family: "Nanum Gothic";
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffffff;
  background: #6578a7;
  border: 1px solid #6578a7;
  border-radius: 50px;

  width: 400px;
  height: 60px;
  cursor: pointer;
`;

export const Contents = styled.div`
  div {
    display: flex;
  }
  .first_data {
    display: none;
  }
  .second_data {
    display: none;
  }
  .third_data {
    display: none;
  }
  .force_data {
    display: none;
  }
  @media ${device.mobile} {
  }
`;
