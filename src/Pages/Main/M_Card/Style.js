import styled from "styled-components";

export const Card = styled.div`
  width: 275px;
  height: 310px;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 0px 0px 10px #b6b6b6;
  margin: 18px;
  p {
    font-family: "Prompt";
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    padding-top: 5px;
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35px;
  img {
    width: 200px;
    height: 200px;
  }
`;
