import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { black900 } from "styles/colors";
import { InterSemiBold } from "styles/fonts";
import { flexAlignCenter, flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexColumn};
  gap: 32px;
`;

export const Filter = styled(Box)`
  ${flexAlignCenter};
  gap: 8px;

  p {
    color: ${black900};
    font-family: ${InterSemiBold};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
export const Title = styled(Typography)`
  color: ${black900};
  font-family: ${InterSemiBold}!important;
  text-transform: uppercase;
  margin-bottom: 16px !important;
`;
