import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { blue, neutral02, black } from "styles/colors";
import { rgba } from "styles/mixins";

export const LinkContainer = styled(Box)`
  text-decoration: none;

  &:hover {
    cursor: pointer;

    .application-item {
      &::before {
        box-shadow: 0px 0px 15px 3px ${rgba(black, 0.15)};
      }

      .list-item-content {
        color: ${blue};
      }
    }

    .arrow-button {
      background: ${neutral02};

      svg {
        stroke: ${blue};
      }
    }
  }

  &.file-download {
    &:hover {
      .download-title {
        color: ${blue};
      }
    }
  }
`;
