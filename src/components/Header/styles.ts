import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { red, white } from "styles/colors";
import { PoppinsBold } from "styles/fonts";
import { rgba } from "styles/mixins";

export const Wrapper = styled("header")`
  position: fixed;
  top: 0;
  left: 286px;
  right: 0px;
  padding: 12px 32px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;

  height: 68px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  z-index: 9;

  .MuiIconButton-root {
    margin-left: 0 !important;
  }
`;

export const Title = styled(Typography)`
  margin-right: auto !important;

`;

export const ChatWrap = styled(Box)`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    position: absolute;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: -3px;
    right: -5px;
    font-size: 10px;
    font-family: ${PoppinsBold};
    display: flex;
    justify-content: center;
    : ${red};
    color: ${white};
  }
`;
