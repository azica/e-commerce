import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral05 } from "styles/colors";
import { device } from "styles/media";
import { flexColumn } from "styles/mixins";

const calculateMarginLeft = () => {
  const windowWidth = document.body.clientWidth;
  const maxWidth = 1120;
  return (windowWidth - maxWidth) / 2;
};

export const Section = styled("section")`
  padding: 48px 0 0 0;
  ${flexColumn};
  gap: 48px;
`;

export const Inner = styled(Box)`
  margin-left: ${calculateMarginLeft}px;

  @media ${device.xs} {
    margin-left: 32px;
  }

  .swiper-wrapper {
    margin-bottom: 48px;
    cursor: grab;
  }

  .swiper-scrollbar {
    margin-top: 48px;
    bottom: 0;
    left: 0;
    max-width: 1120px;

    @media ${device.xs} {
      width: calc(100% - 32px);
    }
  }

  .swiper-scrollbar-drag {
    background: ${neutral05};
    border-radius: 80px;
    cursor: pointer;
  }
`;
