import React from "react";
import * as S from "./Style";
import { useNavigate, useLocation } from "react-router-dom";

const Mob_header = () => {
  const navigate = useNavigate();
  function hi() {
    navigate(-1);
  }
  return (
    <>
      <S.Header>
        <S.PrevBtn onClick={hi}>
          <img src={require("../../assets/chevron.png")} alt="chevron" />
        </S.PrevBtn>
        <S.Logo>
          <img
            src={require("../../assets/playlistlogo.png")}
            alt="playlistlogo"
          />
        </S.Logo>
      </S.Header>
    </>
  );
};

export default Mob_header;
