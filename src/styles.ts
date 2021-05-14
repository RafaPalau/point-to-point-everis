import styled from 'styled-components';

export const Container = styled.form`

h1{
  font-size: 1.3rem;
  text-align: center;
  margin-top: 30px;
  font-family: 'Roboto', sans-serif;
}
h2{
display: flex;
justify-content: center;
  margin: 15px auto;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
}
h3{

  max-width: 960px;
  margin: 0 auto;
  padding: 5rem;
}
`;

export const Form = styled.form`
max-width: 960px;
margin: 1.5rem auto;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;

`;

export const ContainerResult = styled.div`
display: flex;
justify-content: space-between;
margin: 0 auto;
padding: 0rem 2rem;
max-width: 768px;

@media(max-width: 420px ){
  flex-direction: column;
  justify-content: center;
}

img{
  max-width: 10rem;
  display: flex;

  @media(max-width: 420px ){
  margin: 0 auto;
}
}
`;