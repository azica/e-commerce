import { Box } from "@mui/material";
import styled from "styled-components";

import { black900, neutral04 } from "styles/colors";
import { InterSemiBold } from "styles/fonts";

export const Wrapper = styled(Box)`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${neutral04};
  border-radius: 4px;
  padding: 12px 8px;
  gap: 10px;
  height: 32px;
  margin-top: 8px;

  span {
    font-family: ${InterSemiBold};
    line-height: 20px;
    font-size: 12px;
    color: ${black900};
    text-align: center;
    padding: 0;

    &::placeholder {
      font-size: 12px;
      color: ${black900};
    }

    &::focus {
      outline: none;
    }
  }
`;

export const Button = styled("button")`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`;
