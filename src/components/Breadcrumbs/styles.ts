import { Breadcrumbs as MiuBreadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { black600 } from "styles/colors";
import { InterMedium } from "styles/fonts";

export const BreadcrumbsWrapper = styled(MiuBreadcrumbs)`
  text-transform: capitalize;

  &.center {
    .MuiBreadcrumbs-ol {
      justify-content: center;
    }
  }

  .MuiTypography-body1 {
    line-height: 24px;
    font-size: 14px;
  }

  .MuiBreadcrumbs-separator {
    width: 12px;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const BreadcrumbsLink = styled(Link)`
  font-family: ${InterMedium};
  color: ${black600};
  text-decoration: none;
  line-height: 24px;
  font-size: 14px;
  display: block;
`;
