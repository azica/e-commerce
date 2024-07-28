import { Link } from "react-router-dom";
import styled from "styled-components";

import { neutral04 } from "styles/colors";
import { device } from "styles/media";
import { flexAlignCenter } from "styles/mixins";

export const LogoWrap = styled(Link)`
  width: 105px;
  height: 25px;
  ${flexAlignCenter};
  position: relative;

  &.lined {
    width: auto;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  span {
    width: 1px;
    height: 24px;
    background: ${neutral04};
    display: inline-block;
    margin-left: 33px;

    @media ${device.sm} {
      position: absolute;
      top: calc(100% + 16px);
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 70px;
      height: 1px;
    }
  }

  @media ${device.sm} {
    width: 70px;
    height: 24px;

    &.lined {
      width: 100%;
      height: 40px;
    }
  }
`;
