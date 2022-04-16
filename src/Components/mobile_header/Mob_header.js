import React from "react";
import * as S from "./Style";
import { useNavigate } from "react-router-dom";

const Mob_header = ({ prevBtn }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        {prevBtn && (
          <S.PrevBtn
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={require("../../Assets/chevron.png")} alt="chevron" />
          </S.PrevBtn>
        )}
        <S.Logo>
          <a href="/">
            <img
              src={require("../../Assets/playlistlogo.png")}
              alt="playlistlogo"
            />
          </a>
        </S.Logo>
      </S.Header>
    </>
  );
};

export default Mob_header;
