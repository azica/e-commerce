import { Box, IconButton as MuiIconButton, List, Typography } from "@mui/material";
import styled from "styled-components";

import { black900, neutral03, neutral04, neutral07, white } from "styles/colors";
import { InterBold } from "styles/fonts";
import { flexAlignCenter, flexCenter, scrollBar } from "styles/mixins";



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

export const CartList = styled(List)`
  gap: 24px !important;
  padding: 0 !important;
  height: 100%;
  max-height: calc(100vh - 46px - 191px - 80px);

  &.scrollbar {
    overflow-y: auto;
    ${scrollBar};
    padding-right: 20px !important;
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
export const Subtotal = styled(Box)`
  ${flexAlignCenter};
  justify-content: space-between;
  border-bottom: 1px solid ${neutral03};
  padding: 13px 0;
`;

export const Total = styled(Box)`
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 13px 0;
`;

export const Buttons = styled(Box)`
  ${flexAlignCenter};
  margin-left: auto;
  &.mobile {
    margin-top: auto;
  }
`
export const IconButton = styled(MuiIconButton)`
    width: 40px;
    height: 40px;
    margin-left: auto!important;
    }
`