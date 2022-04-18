import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    height: 100vh;
    background-color: #e8db7d;
    font-family: lato;
    font-weight: 100;
    color: #0d1821;
  }
  * {

    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: white;
  }
`

export default GlobalStyle
