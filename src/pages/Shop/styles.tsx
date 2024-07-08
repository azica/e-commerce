import { Box } from "@mui/material";
import styled from "styled-components";
import { white } from "styles/colors";

import { flexColumn } from "styles/mixins";

export const Inner = styled(Box)`
  position: relative;
  display: grid;
  
  padding-bottom: 100px;
  min-height: 100vh;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 1fr;
  
    & > div: nth-child(3) {
      grid-column: 1/3;
      grid-row: 2/3;
    }

  &.grid1 {
    grid-template-columns: 262px 1fr;
    grid-template-rows: 40px 1fr;
    column-gap: 24px;
    & > div: nth-child(1) {
      grid-column: 1/2;
      grid-row: 1/2;
    }

     & > div: nth-child(2) {
      grid-column: 2/3;
      grid-row: 1/2;
    }

    & > div: nth-child(3) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }

  
`;

export const Content = styled(Box)`
  ${flexColumn};
  gap: 40px;
  padding-top: 100px;
`;

export const Toolbar = styled(Box)`
  display: grid;
  gap: 32px;
  position: sticky;
  top: 0px;
  z-index: 1;
  align-self: start;
  background: ${white};
  justify-content: flex-end;
  grid-template-columns: 180px 184px;
  padding: 100px 0 20px 0;
  transition: all .3s ease-out;

  &.grid1 {
    grid-template-columns: 1fr 180px 184px;
    padding: 60px 0 20px 0;
  }

  .MuiTypography-body1 {
    margin-right: auto;
    text-transform: capitalize;
  }
`;


