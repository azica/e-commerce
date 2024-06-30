import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { neutral02, neutral04, neutral07 } from "styles/colors";
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
  transition: 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: auto;
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(0.7);
    }
  }
`;

export const Badges = styled(Box)`
  position: absolute;
  top: 16px;
  left: 16px;
  ${flexColumn};
  gap: 8px;
`;

export const WishlistButtonWrap = styled(Box)`
  position: absolute !important;
  top: 16px;
  right: -32px;
  border-radius: 50% !important;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 3.64%) !important;
`;

export const Content = styled(Box)`
  ${flexColumn};
  gap: 4px;
`;

export const Title = styled(Typography)`
  font-family: ${InterSemiBold}!important;

  a {
    color: ${neutral07};
    text-decoration: none;
  }
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

export const AddToCartButton = styled(Box)`
  position: absolute;
  bottom: -100px;
  right: 16px;
  left: 16px;

  button {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 3.64%) !important;
  }
`;
