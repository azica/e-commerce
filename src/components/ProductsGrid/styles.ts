import { Box } from "@mui/material";
import styled from "styled-components";

export const Grid = styled(Box)`
  display: grid;
  gap: 24px;
  transition: all 0.3s ease-in-out;

  &.grid1 {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &.grid2 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  &.grid3 {
    grid-template-columns: 1fr 1fr;
  }

  &.grid4 {
    grid-template-columns: 1fr;
  }
`;
