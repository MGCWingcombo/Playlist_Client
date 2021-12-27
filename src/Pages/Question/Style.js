import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`;

export const Top = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 200px;
`;

export const Number = styled.div`
  font-family: "NanumExtra";
  font-size: 3.4375rem;
  color: #6578a7;
`;

export const Count = styled.div`
  font-family: "NanumExtra";
  font-size: 1.25rem;
  padding-top: 35px;
  color: #909090;
`;

export const Questions = styled.div`
  font-family: "NanumExtra";
  font-size: 1.5rem;
  margin-top: 50px;
`;

export const Btns = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 400px;
`;

export const ChoiceBtn = styled.button`
  font-family: "NanumBold";
  font-size: 1.125rem;
  width: 450px;
  height: 60px;
  border: 1px solid;
  border-radius: 10px;

  color: ${(p) => p.fontcolor || null};
  background: ${(p) => p.btncolor || null};
  border-color: ${(p) => p.bordercolor || null};
  margin-top: 25px;
`;