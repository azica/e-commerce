import { Box, styled } from "@mui/material";

import { neutral02 } from "styles/colors";

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const Image = styled(Box)`
  position: relative;
  height: 100vh;
  background: ${neutral02};
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
  }
`

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const LogoWrap = styled(Box)`
  position: absolute;
  top: 32px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  
`;

