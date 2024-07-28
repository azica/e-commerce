import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral03, neutral04, white } from "styles/colors";
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

  .swiper-pagination-horizontal {
    bottom: 30px;
  }

  .custom-prev-button,
  .custom-next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 52px;
    height: 52px;
    background: ${white};
    border-radius: 50%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 3.64%);
    z-index: 10;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in;

    svg {
      width: 32px;
    }

    &:hover {
      background: ${neutral03};
    }

    @media ${device.sm} {
      display: none;
    }

    &.swiper-button-disabled svg {
      color: ${neutral04};
    }
  }

  .custom-prev-button {
    left: 20px;
  }

  .custom-next-button {
    right: 20px;
  }
`;
