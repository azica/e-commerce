import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral05 } from "styles/colors";
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

  .swiper-wrapper {
    margin-bottom: 48px;
    cursor: grab;
  }

  .swiper-scrollbar {
    margin-top: 48px;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 1120px;
  }

  .swiper-scrollbar-drag {
    background: ${neutral05};
    border-radius: 80px;
    cursor: pointer;
  }
`;
