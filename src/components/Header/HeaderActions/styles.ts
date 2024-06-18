import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral07, white } from "styles/colors";
import { InterBold } from "styles/fonts";
import { flexAlignCenter, flexCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexAlignCenter};
  margin-left: auto;
`;
