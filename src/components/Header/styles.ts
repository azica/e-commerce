import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { neutral03, neutral04, neutral07, white } from "styles/colors";
import { InterBold, InterMedium } from "styles/fonts";
import { flexAlignCenter, flexCenter, flexColumn } from "styles/mixins";

export const Wrapper = styled("header")`
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
  z-index: 1000;
  padding: 10px 0;
  background: ${white};
`;

export const Inner = styled(Box)`
  ${flexAlignCenter}
  position: relative;
`;

export const LogoWrap = styled(Box)`
  ${flexAlignCenter};
  gap: 5px;

  button {
    width: 24px;
    height: 24px;
    padding: 0 !important;

    svg {
      width: 14px;
    }
  }

  img {
    margin-top: 5px;
  }
`;

export const MobileInner = styled(Box)`
  ${flexColumn};
  width: 100%;
  gap: 16px;
  height: 100%;
`;

export const WishList = styled(Link)`
  ${flexAlignCenter};
  justify-content: space-between;
  text-decoration: none;
  border-bottom: 1px solid ${neutral03};
  margin-bottom: 10px;
  padding-bottom: 8px;
  p {
    color: ${neutral04};
    font-family: ${InterMedium};
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.4px;
  }
`;
export const WishListNumber = styled("span")`
  ${flexAlignCenter};
  gap: 10px;

  svg {
    width: 25px;
    color: ${neutral04};
  }

  span {
    font-size: 12px;
    font-family: ${InterBold};
    color: ${white};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    ${flexCenter};
    background: ${neutral07};
  }
`;
