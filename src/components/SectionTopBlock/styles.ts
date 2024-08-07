import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { neutral07 } from "styles/colors";
import { InterMedium } from "styles/fonts";
import { device } from "styles/media";
import { flexAlignCenter } from "styles/mixins";

export const Wrapper = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;

  @media ${device.sm} {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  width: 250px;

  @media ${device.xs} {
    font-size: 30px !important;
    line-height: 34px !important;
  }
`;

export const SectionLink = styled(Link)`
  font-family: ${InterMedium};
  color: ${neutral07};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.4px;
  ${flexAlignCenter};
  gap: 4px;
  text-decoration: none;
  border-bottom: 1px solid ${neutral07};
  transition: all 0.4s ease;

  svg {
    width: 20px;
    height: 20px;
    transition: all 0.4s ease;
    color: ${neutral07};
  }

  &:hover {
    svg {
      position: relative;
      left: 15px;
      transition: all 0.3s ease;
    }
  }
`;
