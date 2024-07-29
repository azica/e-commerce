import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral02, neutral03, neutral04 } from "styles/colors";
import { InterRegular } from "styles/fonts";
import { flexAlignCenter, flexCenter, flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`ы
  border-bottom: 1px solid ${neutral03};
  border-top: 1px solid ${neutral03};
  padding: 24px 0;
`;

export const Times = styled(Box)`
  ${flexAlignCenter};
  gap: 16px;
  margin-top: 12px;
`;

export const Time = styled(Box)`
  ${flexColumn};
  
  h5 {
    width: 60px;
    height: 60px;
    ${flexCenter};
    background: ${neutral02};
  }

  span {
    font-size: 12px;
    line-height: 20px;
    color: ${neutral04};
    font-family: ${InterRegular};
    text-align: center;
    text-transform: capitalize;
  }
`;
