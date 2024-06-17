import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { blue, neutral02, neutral07 } from "styles/colors";
import { InterBold } from "styles/fonts";
import { flexAlignCenter, flexColumn } from "styles/mixins";

export const Section = styled("section")`
  background: ${neutral02};
  ${flexAlignCenter};
`;
export const Image = styled(Box)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
  }
`;
export const Content = styled(Box)`
  max-width: 455px;
  padding-left: 72px;
  color: ${neutral07};

  h4 {
    margin-bottom: 16px;
  }

  .MuiTypography-body1 {
    margin-bottom: 24px;
  }
`;

export const Sale = styled("div")`
  font-family: ${InterBold};
  text-transform: uppercase;
  color: ${blue};
  margin-bottom: 16px;
`;
