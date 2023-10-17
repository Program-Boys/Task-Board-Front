import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        --default-background: #0F1330
        
        --green-ultra-dark: #1C2D3E
        
        --default-blue: #5C63ED

        --default-white: #FFF
    }
    
    body, html{
    width: 100vw;
    margin: 0px;
    padding: 0px;
    height: 100vh;
    background-color: var(--default-background);
  }
  #root{
    width: 100%;
    height: 100%;
  }
  body {
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Jura', sans-serif;
    font-size: 1.6rem;
  }
  h1, h2, h3 {
    font-weight: bold;
  }
  h4,h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;
