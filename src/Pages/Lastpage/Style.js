import styled from "styled-components";
import device from "../../styleds/constant";
export const Rall = styled.div`
  background: #f9f9f9;
  height: 100vh;
  @media ${device.mobile} {
    height: 820px;
    position: fixed;
  }
`;

export const Logo = styled.div`
  width: 220px;
  height: 65px;
  padding-top: 3vh;
  padding-left: 5vw;
  img {
    width: 220px;
    height: 65px;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

export const All = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.mobile} {
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .btn {
    margin: 35px auto 0px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    justify-content: center;
    margin-top: 90px;
  }
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
    width: 100vw;
    height: auto;
    .mobileview {
      display: flex;
      padding: 0 35px;
    }
  }
`;

export const Ment = styled.p`
  font-family: "Prompt";
  font-size: 1.9rem;
  font-weight: 500;
  color: #6c6f8c;
  margin-left: 50px;
  @media ${device.mobile} {
    font-size: 1.4rem;
    font-weight: 700;
    color: #6578a7;
    margin-left: 0;
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
  border: 2px solid;
  border-color: #6578a7;
  border-radius: 50px;

  width: 400px;
  height: 60px;
  cursor: pointer;

  :hover {
    color: ${(p) => p.fontcolor || null};
    background: ${(p) => p.btncolor || null};
    border-color: ${(p) => p.bordercolor || null};
    transition-duration: 0.3s;
  }

  @media ${device.mobile} {
    width: 300px;
    height: 40px;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-top: 40px;
  }
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
`;
