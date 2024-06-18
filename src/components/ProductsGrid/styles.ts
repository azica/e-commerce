import { Box } from "@mui/material";
import styled from "styled-components";

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust column width */
  gap: 24px;
  transition: all 0.3s ease-in-out; /
`;
