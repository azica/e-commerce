import { Drawer, Typography, IconButton as MuiIconButton } from "@mui/material";
import styled from "styled-components";
import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled(Drawer)`
    &.fullWidth > .MuiPaper-root{
        max-width: 100%;
        width: calc(100% - 32px);
    }
`

export const Title = styled(Typography)`
  ${flexAlignCenter};
  justify-content: space-between;
  margin-bottom: 16px !important;
`;

export const IconButton = styled(MuiIconButton)`
    width: 40px;
    height: 40px;

    svg {
        width: 14px;
        height: 14px;
      }
`