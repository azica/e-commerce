import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { neutral04, neutral07 } from "styles/colors";
import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
  width: 45px;
  display: flex;
  top: 0;
  right: 90px;
  left: 0;
  max-width: calc(100% - 120px - 120px);
  background: #fff;
  transition: all 0.3s ease-in;
  margin: 0 10px 0 auto;
  position: absolute;

  .MuiFormControl-root {
    min-width: 0;
  }

  .MuiInputBase-root {
    padding: 13px 0;
  }

  &.active {
    width: 100%;

    .MuiOutlinedInput-root {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: 0;
      width: 100%;
      transition: all 0.3s ease-in;
    }
  }

  .MuiInputBase-root {
    width: 0;
  }

  .MuiList-root {
    gap: 0;
  }
`;

export const ListLink = styled(Link)`
  color: ${neutral04};
  text-decoration: none;
  font-size: 16px;
  display: block;

  &:hover {
    color: ${neutral07};
  }
`;
export const Button = styled(IconButton)`
  width: 40px;
  height: 40px;
`;
