import { IconButton as MuiIconButton } from "@mui/material";
import styled from "styled-components";

import { white } from "styles/colors";

export const IconButton = styled(MuiIconButton)`
  gap: 16px;
  width: 32px;
  height: 32px;
  background-color: ${white}!important;
`;
