import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral03 } from "styles/colors";
import { flexAlignCenter } from "styles/mixins";

export const Subtotal = styled(Box)`
  ${flexAlignCenter};
  justify-content: space-between;
  border-bottom: 1px solid ${neutral03};
  padding: 13px 0;
  text-transform: capitalize;
`;

export const Total = styled(Box)`
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 13px 0;
`;
