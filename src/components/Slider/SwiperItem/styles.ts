import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral07 } from "styles/colors";
import { flexCenter } from "styles/mixins";

export const Wrap = styled(Box)`
  background: ${neutral07};
  ${flexCenter};
  padding: 70px 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
