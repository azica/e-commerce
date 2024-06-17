import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { black, neutral04, neutral07 } from "styles/colors";
import { InterSemiBold, PoppinsRegular } from "styles/fonts";

interface CheckboxContentProps {
  centered: string;
}

export const CheckboxContent = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 8px;

  ${({ centered }: CheckboxContentProps) => (centered === "true" ? "gap: 3px;" : "margin-top: -3px;")}
`;

export const Text = styled(Typography)`
  color: ${neutral04};
  a {
    color: ${neutral07};
    font-family: ${InterSemiBold};
    text-decoration: none;
  }
`;
