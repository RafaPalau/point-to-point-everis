import styled from 'styled-components';



export const Container = styled.div`
max-width: 960px;
display: flex;
justify-content: center;
flex-direction: column;
margin: 0 auto;
h2{
  font-family: 'Roboto', sans-serif;
  color: #808080;
  margin-right: 3rem;
}


@media(max-width: 960px){
  flex-direction:column;

  h2{
 
  margin: 1rem auto;
}
}
`;

export const Content = styled.div`
display: flex;
justify-content: center;
margin: 0 auto;
align-items: center;

img{
  width: 15rem;
  margin-right: 2rem;
}


@media(max-width: 600px){
  flex-direction:column;
}
`;