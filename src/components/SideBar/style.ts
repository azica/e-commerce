import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { white } from "styles/colors";

import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
  position: sticky;
  top: 0px;
  bottom: 0;
  display: grid;
  gap: 32px;
  align-self: start;
  padding-top: 60px;
  background: ${white};
  z-index: 9;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 20px;
  transition: all .3s ease-out;
  
  &.grid1  {
    grid-template-columns: 1fr;
  }
`;

export const Filter = styled(Box)`
  ${flexAlignCenter};
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled(Typography)`
  text-transform: uppercase;
  margin-bottom: 16px !important;
`;
