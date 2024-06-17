import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral04 } from "styles/colors";
import { InterMedium } from "styles/fonts";

export const Wrapper = styled(Box)``;

export const Form = styled(Box)``;
export const Button = styled("button")`
  border: none;
  padding: 0;
  outline: none;
  font-family: ${InterMedium};
  letter-spacing: -0.4px;
  font-size: 16px;
  line-height: 28px;
  color: ${neutral04};
  background: transparent;
  padding-right: 1px;
  cursor: pointer;
`;
