import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral02, neutral04, neutral07 } from "styles/colors";
import { device } from "styles/media";
import { flexAlignCenter, flexColumn } from "styles/mixins";

export const Titles = styled(Box)`
  ${flexAlignCenter};
  margin: 32px 0 40px 0;

  h1 {
    span {
      color: ${neutral04};
    }
  }

  p span {
    font-weight: 600;
    color: ${neutral07};
  }

  @media ${device.md} {
    h1 {
      font-size: 50px;
    }
  }

  @media ${device.sm} {
    flex-wrap: wrap;
    gap: 16px;
    h1 {
      font-size: 28px;
    }
  }
`;

export const ImageWrap = styled(Box)`
  position: relative;
  background: ${neutral02};
  ${flexColumn};
  align-items: flex-start;
  padding: 20px;
  gap: 15px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    object-fit: contain;
    padding-top: 60px;
  }

  h5 {
    text-transform: capitalize;
  }

  a {
    width: auto;
    position: relative;
    z-index: 1;
  }

  @media ${device.md} {
    gap: 0;

    h5 {
      font-size: 20px;
    }
  }
`;
export const Images = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;

  img:nth-child(1) {
    grid-column: 1/2;
    grid-rows: 1/3;
  }

  img:nth-child(2) {
    grid-column: 2/3;
    grid-rows: 1/2;
  }

  img:nth-child(3) {
    grid-column: 2/3;
    grid-rows: 2/3;
  }
`;
