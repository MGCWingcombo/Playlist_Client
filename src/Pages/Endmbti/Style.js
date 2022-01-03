import styled from "styled-components";

export const All = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Data = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 780px;
`;

export const Button = styled.button`
  font-family: "Prompt";
  color: #ffffff;
  background: #6578a7;
  font-size: 1.2rem;
  font-weight: 700;
  width: 90px;
  height: 40px;
  margin-top: 70px;
  margin-right: 30px;
  border-radius: 10px;
  border: 1px solid #6578a7;
  cursor: pointer;
`;

export const Ment = styled.p`
  font-family: "Prompt";
  font-size: 1.9rem;
  font-weight: 500;
  color: #6c6f8c;
  margin-left: 50px;
`;

export const Btn = styled.button`
  font-family: "Prompt";
  color: #ffffff;
  background: #6578a7;
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
