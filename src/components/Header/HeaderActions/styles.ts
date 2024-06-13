import { Box } from "@mui/material";
import styled from "styled-components";
import { neutral07, white } from "styles/colors";
import { InterBold } from "styles/fonts";
import { flexAlignCenter, flexCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
${flexAlignCenter};
margin-left: auto;

// button:last-child {
//     padding-right: 0;
// }
`

export const ProductQuantity = styled(Box)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${flexCenter};
  background: ${neutral07};

  span {
    font-size: 12px;
    font-family: ${InterBold};
    color: ${white};
  }
`