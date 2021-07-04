import styled from 'styled-components';

export const HeaderContainer = styled.header`
background: #12151C;
height: 10rem;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 4rem;

@media(max-width: 780px){
    height: 10rem;
    padding: 1.5rem 2rem;
  }

h2{
  margin: 0 auto;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Lexend', sans-serif;


  @media(max-width: 420px){
    font-size: 1.4rem;
  }
  @media(max-width: 360px){
    font-size: 1.2rem;
  }
}

p{
  text-align: center;
  font-weight: 600;
  font-family: 'Lexend', sans-serif;
 margin-top: 1rem;
  @media(max-width: 420px){
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1rem;
  }
}
`;
