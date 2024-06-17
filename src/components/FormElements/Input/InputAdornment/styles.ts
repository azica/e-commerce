import { IconButton as IconButtonMui } from "@mui/material";
import styled from "styled-components";

export const IconButton = styled(IconButtonMui)`
  width: 32px;
  height: 32px;
  padding: 4px !important;
  margin-right: -4px !important;

  svg {
    width: 100%;
    height: 100%;
  }
`;
