import { Box } from "@mui/material";
import styled from "styled-components";

import arrowLeft from "assets/icons/arrowLeft.svg?react";
import { white } from "styles/colors";
import { device } from "styles/media";

export const Inner = styled(Box)`
  height: 536px;
  overflow: hidden;

   @media ${device.sm} {
      height: 304px;
    }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 52px;
    height: 52px;
    background: ${white};
    border-radius: 50%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 3.64%);

    @media ${device.sm} {
      display: none;
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: "";
    background-size: contain;
    width: 32px;
    height: 32px;
  }

  .swiper-button-prev::after {
    background: url(${arrowLeft as unknown as string}) no-repeat center center;
  }

  .swiper-button-next::after {
    background: url(${arrowLeft as unknown as string}) no-repeat;
    transform: rotate(180deg);
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
