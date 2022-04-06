import styled from "styled-components";
import device from "../../styleds/constant";
export const Header = styled.div`
  display: none;

  @media ${device.mobile} {
    top: 0;
    position: fixed;
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
  position: absolute;
  top: 5px;
  img {
    width: 25px;
    height: 25px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 27px;
  margin-top: 2.3vw;
  /* margin-left: 28vw; */
  img {
    width: 92px;
    height: 27px;
  }
`;
