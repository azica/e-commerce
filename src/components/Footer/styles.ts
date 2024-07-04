import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { neutral01, neutral03, neutral04, neutral07 } from "styles/colors";
import { InterRegular, PoppinsRegular, PoppinsSemiBold } from "styles/fonts";
import { device } from "styles/media";
import { flexAlignCenter, flexColumn } from "styles/mixins";

export const FooterWrap = styled("footer")`
  background: ${neutral07};
  padding: 80px 0 32px 0;

  & > div {
    ${flexColumn};
    gap: 56px;

     @media ${device.xs} {
      justify-content: center;
      text-align: center;
      gap: 40px;
    }
`;

export const FooterTopInner = styled(Box)`
  ${flexAlignCenter};
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.xs} {
    gap: 40px;
    justify-content: center;

    & > div {
      gap: 16px;
    }

    p {
      margin-top: 16px;
    }
  }

`
export const Slogan = styled(Typography)`
  font-size: 14px;
  line-height: 22px;

  @media ${device.xs} {
    text-align: center;
    width: 100%;
  }
`;

export const FooterLink = styled(Link)`
  font-family: ${InterRegular};
  font-size: 14px;
  line-height: 22px;
  color: ${neutral01};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${neutral04};
    opacity: 0.7;
  }
`;

export const FooterBottomBar = styled(Box)`
  ${flexAlignCenter};
  gap: 28px;
  border-top: 1px solid ${neutral04};
  padding: 14px 0;
  flex-wrap: wrap;

  @media ${device.xs} {
    justify-content: center;
    text-align: center;

    & ul {
      margin: auto;
    }
  }

  a {
    font-family: ${PoppinsSemiBold};
    font-size: 12px;
    line-height: 20px;
    color: ${neutral01};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${neutral04};
    }
  }

  & ul {
    margin-left: auto;
    padding: 0
  }
`;

export const Copyright = styled("p")`
  font-family: ${PoppinsRegular};
  font-size: 12px;
  line-height: 20px;
  color: ${neutral03};
`;
