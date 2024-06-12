import { css } from "styled-components";
import { neutral01, neutral04 } from "./colors";

export const rgba = (color: string, opacity?: number) => {
  const opacityValue = opacity === undefined ? 1 : opacity;
  const colorValue = color.split("(").pop()?.split(")")?.shift();

  return `rgba(${colorValue}, ${opacityValue})`;
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const flexSpaceAround = css`
  display: flex;
  justify-content: space-around;
`;

export const scrollBar = css`
  scrollbar-color: ${neutral04};
  &::-webkit-scrollbar {
    width: 4px;
    -color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    -color: ${neutral04};
    // box-shadow: inset 1px 1px 4px ${neutral04};
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    -color: ${neutral01};
  }
`;


export const fadeAnimation = css`
  animation: show 0.4s ease-in-out;
  
  @keyframes show {
      0% {
          opacity: 0;
      }

      100% {
          opacity: 1;
      }
  }
`