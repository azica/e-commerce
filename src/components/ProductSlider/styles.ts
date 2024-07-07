import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral02 } from "styles/colors";
import { flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`
  position: relative;
  height: 728px;
  overflow: hidden;
  width: 100%;
`;

export const Image = styled(Box)`
  background: ${neutral02};
  width: 100%;
  height: 500px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const Badges = styled(Box)`
  position: absolute;
  top: 16px;
  left: 16px;
  ${flexColumn};
  gap: 8px;
`;

export const ImageThumb = styled(Box)`
  object-fit: cover;
  width: 167px;
  height: 167px;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
