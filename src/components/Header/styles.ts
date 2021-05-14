import styled from 'styled-components';

export const HeaderContainer = styled.header`
background: #12151C;
height: 5rem;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 4rem;
border-bottom: 1px solid var(--gray-100);

h2{
  margin: 0 auto;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  font-family: 'Lexend', sans-serif;
  color: var(--gray-800)
}
p{
  text-align: center;
  font-weight: 600;
  font-family: 'Lexend', sans-serif;
  color: var(--gray-800)
}
`;
