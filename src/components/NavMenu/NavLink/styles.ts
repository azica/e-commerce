import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { neutral04, neutral07 } from "styles/colors";

export const NavLinkWrap = styled(RouterLink)`
  transition: all 0.25s ease-in-out;
 font-family: "Space Grotesk", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: ${neutral04};
  font-weight: 500;
  padding: 0 10px;
  text-decoration: none;
  position: relative; 
  overflow: hidden;

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    left:0;
    right:0;
    width: 100%;
    height: 1.5px;
    background: ${neutral07};
    transition: transform,-webkit-transform;
    transform-origin: right center;
    transform:scale3d(0,1,1);
    transition-timing-function: cubic-bezier(.6,.15,.4,1);
    transition-duration: .5s
  }

  &:hover:after {
    color: ${neutral07};
    transform-origin: left center;
    transform:scale3d(1,1,1);
  }

  &.active {
    color: ${neutral07};     
    }
  }
`;
