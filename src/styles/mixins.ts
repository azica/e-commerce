import { css } from "styled-components";

import { neutral01, neutral04, neutral07 } from "./colors";

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
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${neutral04};
    border-radius: 28px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${neutral07};
  }

  &::-webkit-scrollbar-track {
    background: #eaeaea;
    border-radius: 28px;
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
`;
