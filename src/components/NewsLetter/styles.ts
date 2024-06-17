import { Box } from "@mui/material";
import styled from "styled-components";

import newsletterBg from "assets/images/newsletterBg.png";
import { neutral07 } from "styles/colors";
import { InterRegular } from "styles/fonts";
import { flexCenter } from "styles/mixins";

export const Section = styled("section")`
  background: url(${newsletterBg}) no-repeat;
  background-size: cover;
  padding: 101px 0 95px;
  ${flexCenter};
`;

export const Content = styled(Box)`
  max-width: 488px;
  width: 100%;
  color: ${neutral07};
  text-align: center;

  p {
    font-size: 18px;
    line-height: 30px;
    font-family: ${InterRegular};
    margin: 8px 0 37px 0;
  }
`;
