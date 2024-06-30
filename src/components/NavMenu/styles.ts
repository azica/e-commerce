import styled from "styled-components";

import { flexCenter } from "styles/mixins";

export const MenuWrap = styled("nav")`
  flex: 1;
  ${flexCenter};
  gap: 20px;

  &.mobileMenu {
    display: none;
  }
`;
