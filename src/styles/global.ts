import { createGlobalStyle } from "styled-components";

import { fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  * {
    margin: 0;
    box-sizing: border-box;
  }

   body {
    -webkit-font-smoothing: none;
    -moz-osx-font-smoothing: grayscale;
  }

  .fade-enter, .fade-exit-active {
    opacity: 0;
  }
  .fade-exit, .fade-enter-active  {
    opacity: 1;
  }
  .fade-enter-active, .fade-exit-active {
    transition: all .25s ease-in;
  }

  .fadeIn-enter {
    opacity: 0;
  }

  .fadeIn-enter-active {
    opacity: 1;
    transition: all .25s ease-in;
  }

  .fadeIn-exit  {
    opacity: 0;
  }

  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

`;
