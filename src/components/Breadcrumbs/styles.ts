import { Breadcrumbs as MiuBreadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { black600, black900 } from "styles/colors";
import { InterMedium } from "styles/fonts";

export const BreadcrumbsWrapper = styled(MiuBreadcrumbs)`
  text-transform: capitalize;

  .MuiBreadcrumbs-ol {
    justify-content: center;
  }

  .MuiTypography-body1 {
    color: ${black900};
    line-height: 24px;
    font-family: ${InterMedium};
    font-size: 14px;
  }

  .MuiBreadcrumbs-separator {
    width: 12px;
  }
`;

export const BreadcrumbsLink = styled(Link)`
  font-family: ${InterMedium};
  text-decoration: none;
  color: ${black600};
  line-height: 24px;
  font-family: ${InterMedium};
  font-size: 14px;
  display: block;
`;
