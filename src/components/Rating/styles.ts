import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexAlignCenter};
  gap: 10px;
`;

export const Stars = styled(Box)`
  ${flexAlignCenter};
  gap: 4px;
`;

export const Star = styled(Box)`
  height: 14px;
`;

export const Reviews = styled(Typography)`
  font-size: 12px;
  line-height: 20px;
`;
