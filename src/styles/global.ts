import { createGlobalStyle } from "styled-components";

import { fonts } from "./fonts";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const GlobalStyle = createGlobalStyle`

  ${fonts}

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
  
    overflow: inherit;

  }

  .fade-enter, .fade-exit-active {
    opacity: 0;
  }

  .fade-exit, .fade-enter-active {
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
    transition: all .3s ease-in;
  }

  .fadeIn-exit {
    opacity: 0;
  }
    
`;
