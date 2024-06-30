import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexColumn};
  width: 100%;
  overflow: hidden;
  align-items: flex-start;
`;

export const Image = styled(Box)`
  height: 325px;
  overflow: hidden;
  margin-bottom: 24px;
  transition: all 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

export const Title = styled(Typography)`
  margin-bottom: 8px !important;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  padding-right: 10px;
`;
