import { Box } from "@mui/material";
import styled from "styled-components";

import { blue, neutral02, neutral07 } from "styles/colors";
import { InterBold } from "styles/fonts";
import { device } from "styles/media";
import { flexAlignCenter } from "styles/mixins";

export const Section = styled("section")`
  background: ${neutral02};
  ${flexAlignCenter};
  flex-wrap: wrap;

  & > div {
    @media ${device.sm} {
      width: 100%;
    }
  }
`;

export const Image = styled(Box)`
  max-height: 532px;
  align-self: stretch;
  width: 50%;

  @media ${device.xs} {
    height: 367px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
  }
`;

export const Content = styled(Box)`
  width: 50%;
  padding-left: 72px;
  color: ${neutral07};

  h4 {
    margin-bottom: 16px;
  }

  .MuiTypography-body1 {
    margin-bottom: 24px;
  }

  @media ${device.md} {
    padding: 80px 32px;
  }
`;

export const Sale = styled("div")`
  font-family: ${InterBold};
  text-transform: uppercase;
  color: ${blue};
  margin-bottom: 16px;
`;
