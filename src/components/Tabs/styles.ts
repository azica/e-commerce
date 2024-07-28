import { Box } from "@mui/material";
import { styled } from "styled-components";

import { green, grey400, neutral07, white } from "styles/colors";
import { InterSemiBold } from "styles/fonts";
import { flexAlignCenter, flexCenter } from "styles/mixins";

export const OneTab = styled(Box)`
  position: relative;
  background: transparent;
  padding-bottom: 26px;
  cursor: pointer;
  border-bottom: transparent solid 2px;
  ${flexAlignCenter};
  gap: 17px;
  min-width: 255px;

  span {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: ${grey400};
    ${flexCenter};
    font-size: 16px;
    line-height: 24px;
    color: ${white};
    font-family: ${InterSemiBold};

    svg {
      width: 15px;
      height: 12px;
    }
  }

  p {
    color: ${grey400};
  }

  &.tabs-active {
    border-bottom: ${neutral07} solid 2px;

    p {
      color: ${neutral07};
    }

    span {
      background: ${neutral07};
      color: ${white};
    }
  }

  &.checked {
    border-color: ${green};

    span {
      background: ${green};
    }

    p {
      color: ${green};
    }
  }
`;
export const Container = styled(Box)`
  ${flexAlignCenter};
  justify-content: center;
  gap: 32px;

  > a {
    text-decoration: none;
  }
`;

export const Wrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 32px;
  display: grid;
  gap: 40px;
  grid-template-rows: 36px auto;
`;
