import { Box, IconButton, Typography } from "@mui/material";
import styled from "styled-components";

import { neutral02, neutral04, neutral07, white } from "styles/colors";
import { InterSemiBold } from "styles/fonts";
import { flexAlignCenter, flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`
  ${flexColumn};
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    .wishlist {
      right: 16px;
      transition: right 0.3s ease;
    }

    .addToCart {
      bottom: 16px;
      transition: bottom 0.3s ease;
    }
  }
`;

export const Image = styled(Box)`
  position: relative;
  background: ${neutral02};
  height: 350px;
  overflow: hidden;
  ${flexColumn};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: auto;
  }
`;

export const Badges = styled(Box)`
  position: absolute;
  top: 16px;
  left: 16px;
  ${flexColumn};
  gap: 8px;
`;

export const Wishlist = styled(IconButton)`
  position: absolute !important;
  top: 16px;
  right: -32px;
  gap: 16px;
  width: 32px;
  height: 32px;
  background-color: ${white}!important;
  box-shadow: 0 8px 16px -8px rgba(15, 15, 15, 12%);
`;

export const AddToCart = styled(Box)`
  position: absolute;
  bottom: -100px;
  right: 16px;
  left: 16px;

  button {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 3.64%) !important;
  }
`;

export const Content = styled(Box)`
  ${flexColumn};
  gap: 4px;
`;

export const Title = styled(Typography)`
  color: ${neutral07};
  font-family: ${InterSemiBold}!important;
`;

export const Price = styled(Box)`
  ${flexAlignCenter};
  gap: 4px;

  span {
    font-size: 14px;
    line-height: 22px;
    color: ${neutral07};
    font-family: ${InterSemiBold};

    &.oldPrice {
      color: ${neutral04};
      text-decoration: line-through;
    }
  }
`;
