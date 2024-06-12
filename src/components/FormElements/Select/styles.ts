import { Box, MenuItem as MenuItemMui } from "@mui/material";
import { styled } from "@mui/material/styles";

import { neutral02, black, white, neutral07 } from "styles/colors";
import { PoppinsRegular } from "styles/fonts";
import { rgba } from "styles/mixins";

export const Placeholder = styled(Box)`
  font-family: ${PoppinsRegular};
  font-size: 12px;
  line-height: 135%;
  color: ${neutral07};
`;

export const MenuItem = styled(MenuItemMui)`
  font-family: ${PoppinsRegular};
  font-size: 12px;
  line-height: 135%;
  color: ${neutral07};
  padding: 10px 12px;
  background-color: ${white};
  white-space: normal;

  &:hover,
  &:focus-visible {
    background-color: ${rgba(neutral02, 0.4)};
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
