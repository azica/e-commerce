import { Box } from "@mui/material";
import styled from "styled-components";

interface Container {
  fullwidth?: boolean;
}

export const Wrapper = styled(Box)<Container>`
  max-width: ${({ fullwidth }) => (fullwidth ? "100%" : "1120px")};
  margin: 0 auto;
  width: 100%;
`;
