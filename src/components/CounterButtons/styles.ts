import { Box } from "@mui/material";
import styled from "styled-components";

import { black100, black900, neutral04, white } from "styles/colors";
import { InterSemiBold } from "styles/fonts";

export const Wrapper = styled(Box)`
  display: inline-flex;
  align-items: center;
  background: ${black100};
  border-radius: 4px;
  padding: 12px 8px;
  gap: 10px;
  height: 32px;

  &.outlined {
    border: 1px solid ${neutral04};
    background: ${white};
  }

  &.big {
    height: 52px;
    padding: 12px;

    span {
      line-height: 26px;
      font-size: 16px;
      flex: 1;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
  span {
    font-family: ${InterSemiBold};
    line-height: 20px;
    font-size: 12px;
    color: ${black900};
    text-align: center;
  }
`;

export const Button = styled("button")`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }
`;
