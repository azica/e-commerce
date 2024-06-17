import { Box } from "@mui/material";
import styled from "styled-components";

export const Inner = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 48px 0;
`;
