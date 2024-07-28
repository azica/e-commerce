import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral03, neutral04, neutral07 } from "styles/colors";
import { InterRegular } from "styles/fonts";
import { flexAlignCenter, flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexColumn};
  gap: 24px;
`;
export const Info = styled(Box)`
  ${flexColumn};
  gap: 16px;
`;

export const PriceWrapper = styled(Box)`
  ${flexAlignCenter};
  gap: 12px;
`;

export const ProductList = styled("ul")`
  ${flexColumn};
  gap: 8px;
  padding: 24px 0;
  border-top: 1px solid ${neutral03};
  
  li {
    ${flexAlignCenter};

    p {
      font-family: ${InterRegular};
      font-size; 12px;
      line-height: 12px;
      color: ${neutral04};
      width: 150px;
      text-transform: uppercase;
    }

    span {
      font-family: ${InterRegular};
      font-size; 12px;
      line-height: 20px;
      color: ${neutral07};
      text-transform: capitalize;
    }
  }
`;

export const Buttons = styled(Box)`
  display: grid;
  grid-template-columns: 127px 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px 24px;

  & > div:nth-child(3) {
    grid-column: span 2;
  }
`;
