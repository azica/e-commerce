import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { neutral06 } from "styles/colors";
import { flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexColumn};
  width: 100%;
  overflow: hidden;
  align-items: flex-start;
`;

export const Image = styled(Box)`
  height: 325px;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled(Typography)`
  color: ${neutral06};
  margin-bottom: 8px !important;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  padding-right: 10px;
`;
