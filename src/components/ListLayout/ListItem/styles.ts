import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { neutral02, textBlue } from "styles/colors";

interface WrapperProps {
  layout: string;
}

export const Wrapper = styled(Box)<WrapperProps>`
  display: grid;
  align-items: center;
  grid-template-columns: ${(props) => props.layout};
  border-top: 1px solid ${neutral02};
  margin-right: 20px;
  height: 66px;

  &:first-child {
    border-top: none;
  }
`;

export const Title = styled(Typography)`
  color: ${textBlue};
  height: 20px !important;
`;
