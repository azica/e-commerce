import { Box, IconButton as MuiIconButton } from "@mui/material";
import styled from "styled-components";

import { black900, neutral04, neutral07, white } from "styles/colors";
import { InterBold } from "styles/fonts";
import { flexAlignCenter, flexCenter } from "styles/mixins";

export const ProductQuantity = styled(Box)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${flexCenter};
  background: ${neutral07};

  span {
    font-size: 12px;
    font-family: ${InterBold};
    color: ${white};
  }
`;

export const Summary = styled(Box)`
  margin-top: auto;

  .link {
    font-family: ${InterBold};
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-top: 16px;
    color: ${black900};
    text-align: center;

    &:hover {
      color: ${neutral04};
    }
  }
`;

export const Buttons = styled(Box)`
  ${flexAlignCenter};
  margin-left: auto;
  &.mobile {
    margin-top: auto;
  }
`;
export const IconButton = styled(MuiIconButton)`
    width: 40px;
    height: 40px;
    margin-left: auto!important;
    }
`;
