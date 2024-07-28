import { Box, TableContainer, Typography } from "@mui/material";
import styled from "styled-components";

import { Container } from "components/Wrappers/Container";
import { neutral02, neutral04 } from "styles/colors";
import { InterSemiBold } from "styles/fonts";
import { flexAlignCenter, flexColumn, scrollBar } from "styles/mixins";

export const Wrapper = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 415px;
  gap: 64px;
  padding: 80px 0;
`;

export const Image = styled(Box)`
  width: 80px;
  height: 96px;
  background: ${neutral02};
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled(Typography)`
  font-size: 14px !important;
  line-height: 22px !important;
`;
export const Summary = styled(Box)`
  border: 1px solid ${neutral04};
  padding: 24px;
  border-radius: 6px;
  ${flexColumn};
  gap: 16px;
`;

export const TableWrap = styled(TableContainer)<{ maxHeight?: number }>`
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : "480px")};
  ${scrollBar};
  padding-right: 20px;

  & thead th {
    padding: 0 0 24px 0;
  }

  & thead th:not(:first-child) {
    text-align: center;
  }

  & tbody tr td:first-child,
  & tbody tr td:last-child {
    padding: 24px 0;
  }
`;

export const RemoveButton = styled("button")`
  color: ${neutral04};
  font-family: ${InterSemiBold};
  padding: 0;
  font-size: 14px;
  line-height: 22px;
  border: none;
  background: transparent;
  ${flexAlignCenter};
  gap: 4px;
  height: 24px;
  cursor: pointer;

  &.left {
    margin-left: auto;
  }

  & > svg {
    width: 14px;
    height: 14px;
  }
`;
