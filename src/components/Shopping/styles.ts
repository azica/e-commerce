import { Box } from "@mui/material";
import styled from "styled-components";

import { Container } from "components/Wrappers/Container";
import { neutral04 } from "styles/colors";
import { flexColumn } from "styles/mixins";

export const Wrapper = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 415px;
  gap: 64px;
  padding: 80px 0;
`;

export const Summary = styled(Box)`
  border: 1px solid ${neutral04};
  padding: 24px;
  border-radius: 6px;
  ${flexColumn};
  gap: 16px;
`;
