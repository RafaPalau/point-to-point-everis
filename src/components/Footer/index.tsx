import React from "react";
import * as S from "./styles";

import {GrLinkedin, GrGithub} from 'react-icons/gr'

export const Footer: React.FC = () => {
  return(

<S.Container>
<p>Desenvolvido por Rafael Palau</p>
<a href="https://www.linkedin.com/in/palaurafael/" target="_blank" rel="noreferrer"><GrLinkedin /></a>
<a href="https://github.com/rafapalau" target="_blank" rel="noreferrer"><GrGithub /></a>

</S.Container>
  ) 
};
