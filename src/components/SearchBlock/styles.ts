import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { neutral04, neutral07 } from "styles/colors";

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

  &.mobile {
    position: relative;
    border: 1px solid ${neutral04};
    width: 100%;
    max-width: 100%;
    border-radius: 4px;
    align-items: center;

    .MuiInputBase-root {
      padding: 8px;
    }
  }

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
