import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled("header")`
  position: fixed;
  top: 0;
  left: 0px;
  right: 0px;
  z-index: 9;
  padding: 10px 0;
`;

export const Inner = styled(Box)`
  ${flexAlignCenter}
`;

