import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
:root {
  --white: #FFF;

  --gray-50: #F7F8FA;
  --gray-100: #E6E8EB;
  --gray-200: #AFB2B1;
  --gray-500: #808080;
  --gray-800: #494D4B;
}
@media(max-width: 1080px){
  html{
    font-size: 93.75%; // 15px
  }
}
@media(max-width: 720px){
  html{
    font-size: 87.5%; // 14px
  }
}
body{
  background: var(--gray-50);
}
body, input, textarea, button{
  font-family: 'Inter', sans-serif;
  color: var(--gray-500);
}
h1, h2, h3, h4, h5, h6{
  font-weight: 600;
  font-family: 'Lexend', sans-serif;
  color: var(--gray-800)
}
h1{
  font-size: 2rem;
}
H2{
  font-size: 1.5rem;
}
button{
  cursor: pointer;
}
`;
