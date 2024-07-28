import styled from "styled-components";

import { neutral03, neutral07 } from "styles/colors";
import { InterMedium } from "styles/fonts";
import { flexCenter, flexColumn } from "styles/mixins";

export const MenuWrap = styled("nav")`
  flex: 1;
  ${flexCenter};
  gap: 20px;

  &.mobileMenu {
    display: none;
  }
  &.isMobileMenu {
    ${flexColumn};
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;

    a {
      padding-left: 0;
      height: 40px;
      border-bottom: 1px solid ${neutral03};
      width: 100%;
      color: ${neutral07};
      font-family: ${InterMedium};
    }
  }
`;
