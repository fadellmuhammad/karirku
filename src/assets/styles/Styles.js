import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  font-size: 62.5%;

  @media (max-width: 1124px) {
    font-size: 45%;
  }

  @media (max-width: 425px) {
    font-size: 50%;
  }
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
    margin: 0 20rem;

    @media (max-width: 1440px) {
      margin: 0 9rem;
    }
    @media (max-width: 761px) {
      margin: 0 6rem;
    }
    @media (max-width: 426px) {
      margin: 0 3rem;
    }
  }
`