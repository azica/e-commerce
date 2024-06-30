import { Box } from "@mui/material";
import styled from "styled-components";

import { Button } from "components/FormElements";
import { flexColumn } from "styles/mixins";

export const Inner = styled(Box)`
  display: grid;
  grid-template-columns: 262px 1fr;
  gap: 24px;
  padding: 60px 0 100px 0;
`;

export const Content = styled(Box)`
  ${flexColumn};
  gap: 40px;
`;

export const Toolbar = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 180px 184px;
  gap: 32px;

  .MuiTypography-body1 {
    margin-right: auto;
    text-transform: capitalize;
  }
`;

export const ShowMoreButton = styled(Button)`
  border-radius: 40px !important;
  margin: 80px auto 0 auto !important;
`;
