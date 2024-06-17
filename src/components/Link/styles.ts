import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { neutral04, neutral07 } from "styles/colors";
import { InterMedium } from "styles/fonts";

export const LinkWrapper = styled(RouterLink)`
  font-family: ${InterMedium};
  color: ${neutral07};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  border-bottom: 1px solid ${neutral07};
  transition:
    color 0.4s ease,
    border-bottom-color 0.4s ease;

  svg {
    width: 20px;
    height: 20px;
    transition:
      transform 0.4s ease,
      color 0.4s ease;
    color: ${neutral07};
  }

  &:hover {
    color: ${neutral04};
    border-bottom-color: ${neutral04};

    svg {
      transform: translateX(15px);
      color: ${neutral04};
    }
  }
`;
