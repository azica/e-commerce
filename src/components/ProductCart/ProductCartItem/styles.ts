import { Box } from "@mui/material";
import styled from "styled-components";

import { neutral02, neutral03, neutral04, neutral07 } from "styles/colors";
import { InterRegular, InterSemiBold } from "styles/fonts";

export const Wrapper = styled("li")`
  display: grid;
  grid-template-columns: 80px 185px 1fr;
  gap: 16px;
  border-bottom: 1px solid ${neutral03};
  padding: 24px 0;
`;

export const Title = styled("p")`
  font-size: 14px;
  line-height: 22px;
  color: ${neutral07};
  font-family: ${InterSemiBold};
`;

export const SubTitle = styled("p")`
  font-size: 12px;
  line-height: 20px;
  color: ${neutral04};
  font-family: ${InterRegular};
  text-transform: capitalize;
  margin-bottom: 8px;
`;

export const Image = styled(Box)`
  width: 80px;
  height: 96px;
  background: ${neutral02};
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Info = styled(Box)``;

export const RightSide = styled(Box)`
    text-align: right;

  button {
    margin-top: 8px;
    padding: 0 !important;

    svg {
      color: ${neutral04};
      width: 14px;
      height: 14px;
  }
`;
