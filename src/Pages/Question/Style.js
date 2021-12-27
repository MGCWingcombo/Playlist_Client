import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
`;

export const Top = styled.div`
  display: flex;
`;

export const Number = styled.div`
  font-family: "NanumExtra";
  font-size: 3.4375rem;
  color: #6578a7;
`;

export const Count = styled.div`
  font-family: "NanumExtra";
  font-size: 1.25rem;
  color: #909090;
`;

export const Questions = styled.div`
  font-family: "NanumExtra";
  font-size: 1.5rem;
`;

export const ChoiceBtn = styled.button`
  font-family: "NanumBold";
  font-size: 1.125rem;
  color: ${(p) => p.fontcolor || null};
  background: ${(p) => p.btncolor || null};
`;
