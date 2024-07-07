import { Box } from "@mui/material";
import styled from "styled-components";
import { neutral03 } from "styles/colors";

export const Wrapper = styled(Box)`
  .MuiOutlinedInput-root {
    width: 180px!important;
    height: 40px;
  }

  &.bordered {
    .MuiOutlinedInput-root {
      border: 2px solid ${neutral03};
      min-width: 256px;
      border-radius: 8px;
      padding-left: 16px;
    }
  }
`;
