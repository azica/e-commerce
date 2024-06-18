import { Box, List, Typography } from "@mui/material";
import styled from "styled-components";

import { black900, neutral03, neutral04, neutral07, white } from "styles/colors";
import { InterBold, InterRegular } from "styles/fonts";
import { flexAlignCenter, flexCenter, scrollBar } from "styles/mixins";

export const Title = styled(Typography)`
  color: ${black900};
  ${flexAlignCenter};
  justify-content: space-between;
  margin-bottom: 16px !important;

  button {
    padding: 0 !important;
  }
`;

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
  padding: 0 20px 0 0 !important;
  height: 100%;
  overflow-y: scroll;
  ${scrollBar};
`;

export const Summary = styled(Box)`
  margin-top: auto;
  padding-top: 50px;

  a {
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
  color: ${neutral07};
  p {
    font-family: ${InterRegular};
  }
  .subtotal {
    font-family: ${InterBold};
  }
`;

export const Total = styled(Box)`
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 13px 0;
  color: ${neutral07};
`;
