import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { green, neutral04, neutral07 } from "styles/colors";
import { InterRegular, InterSemiBold } from "styles/fonts";

export const NoAccount = styled(Typography)`
  color: ${neutral04};
  width: 100%;
  font-family: ${InterRegular};
  a {
    color: ${green};
    text-decoration: none;
    font-family: ${InterSemiBold};
  }
`;

export const FormContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  .rememberCheckbox {
    .MuiTypography-root {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    a {
      font-family: ${InterSemiBold};
      font-size: 16px;
      line-height: 26px;
      color: ${neutral07};
      text-decoration: none;
    }
  }
`;
