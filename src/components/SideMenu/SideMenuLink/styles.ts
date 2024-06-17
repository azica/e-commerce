import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { black500, black900 } from "styles/colors";
import { InterSemiBold } from "styles/fonts";

const NavLink = styled(RouterLink)`
  font-family: ${InterSemiBold};
  text-transform: capitalize;
  color: ${black500};
  font-size: 14px;
  line-height: 22px;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: ${black900};
    color: ${black900};
  }

  &.activeLink {
    border-color: ${black900};
    color: ${black900};
  }
`;

export { NavLink };
