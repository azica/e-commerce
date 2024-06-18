import styled from "styled-components";

import { green, white } from "styles/colors";
import { InterBold } from "styles/fonts";

function getStyles(variant: Badge["size"]) {
  switch (variant) {
    case "medium":
      return `
                padding: 4px 14px;
                font-size: 16px;
                line-height: 16px;
                border-radius: 4px;
            `;
    case "large":
    default:
      return `
                padding: 48px 18px;
                font-size: 18px;
                line-height: 18px;  
                border-radius: 8px;
            `;
  }
}

export const Wrapper = styled("div")<Badge>`
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
