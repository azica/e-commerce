import { Box, Card } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { neutral02 } from "styles/colors";
import { flexColumn } from "styles/mixins";

export const Wrapper = styled(Box)`
  padding-bottom: 25px;
  margin-top: 24px;
  background: ${neutral02};
  border-radius: 30px;
  width: 100%;
  height: 100%;
  box-shadow: none;
  ${flexColumn};
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  margin: 44px auto;
  width: 148px;
  height: 58px;
`;
