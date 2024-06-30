import { Box } from "@mui/material";
import styled from "styled-components";

import { device } from "styles/media";

export const Inner = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 48px 0;

  @media ${device.md} {
    padding: 32px 0;
    grid-template-columns: repeat(2, 1fr);
  }
`;
