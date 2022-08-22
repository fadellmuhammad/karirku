import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: 'Cabin', sans-serif;
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.6;
    color: #2A2A2A;
    background-color: #fff;
  }

  ul {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .container {
    margin: 0 10rem;

    @media (max-width: 425px) {
      margin: 0 3rem;
    }
  }
`