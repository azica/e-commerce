import styled from "styled-components";

import { neutral01, neutral04 } from "styles/colors";
import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled("ul")`
  ${flexAlignCenter};
  gap: 24px;
`;

export const IconWrap = styled("li")`
  width: 24px;
  height: 24px;
  padding: 0 !important;
  transition: all 0.3s ease;
  list-style: none;

  svg {
    color: ${neutral01};
    transition: all 0.3s ease;
  }

  &:hover {
    svg {
      color: ${neutral04};
    }
  }
`;
