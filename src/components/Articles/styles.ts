import { Box } from "@mui/material";
import styled from "styled-components";

import { flexAlignCenter } from "styles/mixins";

export const Section = styled("section")`
  padding: 80px 0;
`;
export const Inner = styled(Box)`
  ${flexAlignCenter};
  justify-content: center;
  gap: 25px;
  margin-top: 40px;
  flex-wrap: wrap;

  & > div {
    width: 100%;
    max-width: 355px;
  }
`;
