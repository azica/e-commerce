import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { Button } from "components/FormElements";
import { textBlue } from "styles/colors";
import { scrollBar } from "styles/mixins";

export const Wrapper = styled(Box)`
  padding: 28px 4px 30px 28px;
`;

export const Inner = styled(Box)`
  overflow-y: scroll;
  max-height: 198px;
  ${scrollBar};
  cursor: pointer;
`;

export const Title = styled(Typography)`
  color: ${textBlue};
  margin-bottom: 16px !important;
`;

export const ListButton = styled(Button)`
  margin-top: 36px !important;
  margin-right: 28px !important;
`;
