import { Box, MenuItem as MenuItemMui } from "@mui/material";
import { styled } from "@mui/material/styles";

import { neutral02, black, white, neutral07, neutral04 } from "styles/colors";
import { InterSemiBold } from "styles/fonts";
import { rgba } from "styles/mixins";

export const Placeholder = styled(Box)`
  font-family: ${InterSemiBold};
  font-size: 16px;
  line-height: 26px;
  color: ${neutral07};
`;

export const MenuItem = styled(MenuItemMui)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  color: ${neutral04};
  font-weight: 400;
  padding: 8px;
  background-color: ${white};
  white-space: normal;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    background-color: ${rgba(neutral02)};
    font-weight: 500;
    color: ${neutral07};
  }

  &.Mui-selected {
    background-color: ${neutral02};
    color: ${black};
    pointer-events: none;
  }
`;

export const Text = styled(Box)`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
`;

export const ChipList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ChipItem = styled(Box)`
  display: flex;
  align-items: center;
  padding: 0 4px;
  background: ${neutral02};
  border: 1px solid ${neutral07};
  border-radius: 8px;
  overflow: hidden;

  .MuiChip-root {
    border: none;
  }
`;
