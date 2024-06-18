import { Box, IconButton } from "@mui/material";
import styled from "styled-components";

import { neutral03, neutral04, neutral07, neutral02 } from "styles/colors";
import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexAlignCenter};
`;

export const Button = styled(IconButton)`
  border: 1px solid ${neutral03}!important;
  border-right-color: transparent !important;
  width: 46px;
  height: 40px;
  padding: 0;
  border-radius: 0 !important;
  color: ${neutral04};

  &:last-child {
    border-right-color: ${neutral03} !important;
  }

  &.active,
  &:hover {
    color: ${neutral07};
    background: ${neutral02};

    svg {
      color: ${neutral07};
    }
  }
  svg {
    color: ${neutral04};
  }
`;
