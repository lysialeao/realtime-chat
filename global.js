import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
      height: 100%;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: small;
  }

  ul {
    list-style: none;
  }

`