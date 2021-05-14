import styled from 'styled-components';

export const LinkBack = styled.a`
  text-decoration: none;
  margin: 7px 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.9;
  }
  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const Container = styled.div`
max-width: 960px;
display: flex;
justify-content: center;
flex-direction: column;
margin: 1rem auto;
padding: 1rem;
h2{
  font-family: 'Roboto', sans-serif;
  color: #808080;
  padding: 1.5rem;
}
`;

export const Content = styled.div`
display: flex;
justify-content: center;

img{
  width: 15rem;
  margin-left: 1rem;
}
`;