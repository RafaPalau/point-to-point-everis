import React from "react";
import * as S from "./styles";

import waitImage from "../../assets/waitImage.svg";

export const WaitImage: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <h2>Aguardando a sua escolha...</h2>
        <img src={waitImage} alt='Acesso negado' />
      </S.Content>
    </S.Container>
  );
};
