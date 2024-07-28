import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral03 } from "styles/colors";

export const Wrapper = styled(Box)`
  border-bottom: 1px solid ${neutral03};
  padding-bottom: 24px;

  .MuiButton-root {
    padding: 0;
    min-width: 0;
  }

  & div p {
    font-size: 12px !important;
    line-height: 20px !important;

    &:nth-child(2),
    &:nth-child(3) {
      cursor: pointer;
    }
  }
`;
