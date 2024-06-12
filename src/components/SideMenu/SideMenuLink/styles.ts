import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { black, neutral04, white } from "styles/colors";
import { PoppinsRegular } from "styles/fonts";
import { flexAlignCenter, flexCenter } from "styles/mixins";

const NavLink = styled(RouterLink)`
  font-family: ${PoppinsRegular};
  font-size: 16px;
  line-height: 21px;
  text-decoration: none;
  color: ${black};
  ${flexAlignCenter};
  height: 40px;
  padding: 0 0 0 44px;
  gap: 8px;
  position: relative;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: ${white};
    background: ${neutral04};
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    svg {
      color: ${white};
    }
  }

  &.active {
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    color: ${white};
    svg {
      color: ${white};
    }
  }
`;

const IconWrap = styled("span")`
  width: 24px;
  height: 24x;
  ${flexCenter};

  svg {
    width: 100%;
    height: 100%;
    color: ${black};
    transition: all 0.25s ease-in-out;
  }
`;
export { NavLink, IconWrap };
