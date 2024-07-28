import { Box } from "@mui/material";
import styled from "styled-components";

import { Container } from "components/Wrappers/Container";
import { neutral03, neutral04 } from "styles/colors";
import { flexColumn } from "styles/mixins";

export const Wrapper = styled(Container)`
  padding: 80px 0;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 415px;
  gap: 64px;
`;

export const ColumnWrap = styled(Box)`
  ${flexColumn};
  gap: 24px;
  border: 1px solid ${neutral04};
  border-radius: 4px;
  overflow: hidden;
  transition: 0.3s ease-in;
  padding: 16px 24px;
  margin-bottom: 14px;

  &.bigPadding {
    padding: 40px 24px;
  }
`;

export const InputsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  .col6 {
    width: calc(100% / 2 - 12px);
  }

  .hidden {
    transform: translateY(-30px);
    opacity: 0;
    visibility: hidden;
    height: 0;
  }

  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${neutral03};
  }

  .MuiFormControl-root .MuiInputBase-root {
    width: 100% !important;
  }
`;
