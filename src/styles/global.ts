import { createGlobalStyle } from "styled-components";

import { fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
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
    transition: all .50s ease-in;
  }

  .fadeIn-exit  {
    opacity: 0;
  }


`;
