import { createGlobalStyle } from "styled-components";

import { black } from "./colors";
import { PoppinsRegular, fonts } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {margin-right: calc(-1 * (100vw - 100%));}

  body {
    font-family: ${PoppinsRegular};
    color: ${black};
    // overflow-x: hidden;
    // padding-right: 0 !important;
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
`;
