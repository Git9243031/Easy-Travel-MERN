import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    ${({ theme }) => css`
      body {
        font-family: "Poppins", sans-serif;
        background-image: url(${theme.colors.bgMain});
        background-size: 400px 400px;
      }
    `}
`;

export default GlobalStyle;
