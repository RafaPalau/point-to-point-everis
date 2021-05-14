import React from "react";
import * as S from "./styles";
import { AiOutlineLeft } from "react-icons/ai";
import acessDenied from "../../assets/access-denied.svg";

export const CityError: React.FC = () => {
  return (
    <S.Container>
      <h2>Por favor, na próxima, escolha duas cidades diferentes!</h2>

      <S.Content>
        <S.LinkBack href='/'>
          <AiOutlineLeft />
          <p>Voltar</p>
          <img src={acessDenied} alt='Acesso negado' />
        </S.LinkBack>

       
      </S.Content>
    </S.Container>
  );
};
