import React from "react";
import * as S from "./Style";
const Mob_header = () => {
  return (
    <>
      <S.Header>
        <S.PrevBtn>
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
