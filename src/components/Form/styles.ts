import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface FormProps {
  layout?: string;
}

export const FormContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const InputsContainer = styled(Box)`
  display: grid;
  grid-template-columns: ${({ layout }: FormProps) => (layout ? layout : "1fr")};
  gap: 10px;
`;
