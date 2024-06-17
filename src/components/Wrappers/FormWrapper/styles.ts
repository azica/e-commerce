import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { neutral07 } from "styles/colors";

export const Title = styled(Typography)`
  margin-bottom: 24px;
  color: ${neutral07};
  width: 100%;
`;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 456px;
  width: 100%;
  margin: auto;
  animation: show 0.4s ease-in-out;

  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
