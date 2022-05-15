import styled from "styled-components";
import device from "../../Styles/constant";
export const Contents = styled.div``;

export const Card = styled.div`
  width: 260px;
  height: 330px;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 0px 0px 10px #b6b6b6;
  margin: 18px;

  a {
    text-decoration: none;
    margin-left: 30px;
  }
  .Music {
    font-family: "Prompt";
    font-size: 1.4rem;
    font-weight: 900;
    color: #6c6f8c;
    margin-bottom: 0px;
  }
  .Artist {
    font-family: "Prompt";
    font-size: 1rem;
    font-weight: 800;
    color: #b6b6b6;
    margin: 0;
  }

  @media ${device.mobile} {
    min-width: 205px;
    min-height: 240px;
    max-width: 205px;
    max-height: 240px;
    box-shadow: 0px 0px 5px #b6b6b6;
    margin: 9px;
    a {
      margin-left: 25px;
    }

    .Music {
      font-size: 1.1rem;
      margin: 5px 0 0 5px;
    }
    .Artist {
      font-size: 0.8rem;
      font-weight: 600;
      margin-left: 5px;
    }
  }
`;
export interface ImgSt {
  url: string;
}

export const Img = styled.div<ImgSt>`
  padding-top: 20px;
  div {
    background-image: url("${(p) => p.url || null}");
    //background-image: url("https://img.youtube.com/vi/UaaivA6ElmI/0.jpg");
    width: 200px;
    height: 190px;
    border-radius: 25px;
    background-size: 200px 190px;
    background-repeat: no-repeat;
  }
  @media ${device.mobile} {
    div {
      border-radius: 15px;
      max-width: 155px;
      max-height: 145px;
      min-width: 155px;
      min-height: 145px;
    }
  }
`;
