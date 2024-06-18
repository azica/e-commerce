import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral07 } from "styles/colors";
import { flexCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
  position: relative;
  height: 100%;
`;

export const Container = styled(Box)`
  ${flexCenter};
  height: 100%;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;

  &.active {
    transition: all 0.25s ease-in-out;
    opacity: 1;
  }

  .MuiCircularProgress-root {
    color: ${neutral07};
  }
`;

export const Content = styled(Box)`
  height: 100%;
`;
