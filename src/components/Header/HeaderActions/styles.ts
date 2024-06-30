import { Box } from "@mui/material";
import styled from "styled-components";

import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexAlignCenter};
  margin-left: auto;
`;

export const LogoWrap = styled(Box)`
  ${flexAlignCenter};
  gap: 4px;
`;
