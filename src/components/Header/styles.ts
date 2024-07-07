import { Box } from "@mui/material";
import styled from "styled-components";

import { white } from "styles/colors";
import { flexAlignCenter, flexColumn } from "styles/mixins";

export const Wrapper = styled("header")`
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
  z-index: 1300;
  padding: 10px 0;
  background: ${white};
`;

export const Inner = styled(Box)`
  ${flexAlignCenter}
`;

export const LogoWrap = styled(Box)`
   ${flexAlignCenter};
    gap: 5px;

    button {
      width: 24px;
      height: 24px;
      padding: 0!important;

      svg {
        width: 10px;
        height: 8px;
      }
    }

`

export const MobileInner = styled(Box)`
  ${flexColumn};
  width: 100%;
  gap: 16px;
  height: 100%;
`