import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    font-size: 16px;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
