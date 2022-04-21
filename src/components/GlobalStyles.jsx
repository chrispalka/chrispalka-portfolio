import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #e8db7d;
    font-family: lato;
    font-weight: 100;
    color: #0d1821;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
  a {
    text-decoration: none;
    color: #fcf7ff;
  }
  .slide-enter {
    transform: translateX(-10%);
  }

  .slide-enter-active {
    transform: translateX(0%);
    transition: transform 200ms ease-in-out;
  }

  .slide-exit {
    transform: translateX(0%);
  }

  .slide-exit-active {
    transform: translateX(-100%);
    transition: transform 1000ms ease-in-out;
  }
  .page {
    position: absolute;
    left: 15px;
    right: 15px;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.4);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

`

export default GlobalStyle
