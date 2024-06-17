import { Box } from "@mui/material";
import styled from "styled-components";

import { white } from "styles/colors";
import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled("header")`
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
  z-index: 9;
  padding: 10px 0;
  background: ${white};
`;

export const Inner = styled(Box)`
  ${flexAlignCenter}
`;
