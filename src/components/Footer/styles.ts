import styled from 'styled-components';

export const Container = styled.footer`
background: #12151C;
position: fixed;
bottom: 0;
width: 100%;
height: 4rem;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
svg{
  height: 1.5rem;
width: 1.5rem;
}
p{
  margin: 1rem;
}
a{
margin: 0.4rem;
color: #fff;

&:hover{
  filter: brightness(0.8);
  
}
}
`;
