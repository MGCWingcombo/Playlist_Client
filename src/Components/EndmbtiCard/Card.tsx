import React from "react";
import * as S from "./Style";

interface CardKeys {
  keys: { url: string; urlImg: any; Music: string; Artist: string };
}

const Card = ({ keys }: CardKeys) => {
  return (
    <>
      <S.Card>
        <a href={keys.url} target="_blank" rel="noreferrer">
          <S.Img url={keys.urlImg}>
            <div></div>
          </S.Img>
          <p className="Music">{keys.Music}</p>
          <p className="Artist">{keys.Artist}</p>
        </a>
      </S.Card>
    </>
  );
};

export default Card;
