import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyles`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #333;
    color: #fff;
  }
`