import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { black, black900 } from "styles/colors";
import { flexCenter, flexColumn } from "styles/mixins";

export const Section = styled("section")<{ bg: string }>`
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  height: 392px;
  ${flexCenter};
`;

export const Inner = styled(Box)`
  ${flexColumn};
  gap: 24px;
  max-width: 450px;
  margin: auto;
  text-align: center;
`;

export const Title = styled(Typography)`
  color: ${black};
`;

export const SubTitle = styled(Typography)`
  color: ${black900};
`;
