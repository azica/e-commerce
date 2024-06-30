import { Box } from "@mui/material";
import styled from "styled-components";

import { device } from "styles/media";

export const Inner = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 48px 0;
  justify-content: center;

  @media ${device.md} {
    padding: 32px 0;
  }
`;
