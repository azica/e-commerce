import { Box } from "@mui/material";
import styled from "styled-components";

import { white } from "styles/colors";
import { device } from "styles/media";

export const Inner = styled(Box)`
  height: 536px;
  overflow: hidden;
  position: relative;

   @media ${device.sm} {
      height: 304px;
    }

  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .swiper-pagination-bullet {
    background: ${white};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 100px;
    background: ${white};
  }
`;


export const PrevButton = styled("button")`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 52px;
      height: 52px;
      background: ${white};
      border-radius: 50%;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 3.64%);
      z-index: 10;
      right: 10px;
      outline: none;
      border: none;
      cursor: pointer;

    @media ${device.sm} {
      display: none;
    }
`

export const NextButton = styled("button")`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 52px;
      height: 52px;
      background: ${white};
      border-radius: 50%;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 3.64%);
      z-index: 10;
      left: 10px;
      outline: none;
      border: none;
      cursor: pointer;

    @media ${device.sm} {
      display: none;
    }

`