import styled from "styled-components";

import { green, white } from "styles/colors";
import { InterBold } from "styles/fonts";

function getStyles(size: Badge["size"]) {
  switch (size) {
    case "large":
      return `
        padding: 8px 18px;
        font-size: 18px;
        line-height: 18px;
        border-radius: 4px;
      `;
    case "medium":
      return `
        padding: 4px 14px;
        font-size: 16px;
        line-height: 16px;
        border-radius: 4px;
      `;
    default:
      return `
        padding: 48px 18px;
        font-size: 18px;
        line-height: 18px;
        border-radius: 8px;
      `;
  }
}

export const Wrapper = styled.div<Badge>`
  background: ${white};
  font-family: ${InterBold};
  color: #121212;
  text-transform: uppercase;
  text-align: center;
  ${({ size }) => getStyles(size)};

  &.green {
    background: ${green};
    color: ${white};
  }
`;
