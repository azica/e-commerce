import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { neutral02, neutral04, neutral07 } from "styles/colors";
import { PoppinsRegular } from "styles/fonts";
import { device } from "styles/media";
import { flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`
  background: ${neutral02};
  ${flexColumn};
  padding: 48px 32px;
  flex: 1 1 calc(25% - 24px);

  @media ${device.sm} {
    padding: 32px 16px;
    flex: 1 1 calc(33.33% - 24px);
  }
  @media ${device.xs} {
    padding: 32px 16px;
    flex: 1 1 calc(50% - 24px);
    width: calc(100% / 2 - 24px);
  }
`;

export const Title = styled(Typography)`
  color: ${neutral07};
`;

export const SubTitle = styled(Typography)`
  font-family: ${PoppinsRegular}!important;
  font-size: 14px !important;
  line-height: 24px !important;
  color: ${neutral04};

  &:nth-child(2) {
    margin-bottom: 9px;
  }
`;

export const IconWrap = styled(Box)`
  width: 48px;
  height: 48px;
  margin-bottom: 17px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
