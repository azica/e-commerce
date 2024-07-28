import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  .red {
    background: red;
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .blue {
    background: blue;
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .grey {
    background: grey;
    grid-column: 2;
    grid-row: 1/2;
  }
`;

export const FooterWrapper = styled.div`
  padding: 25px 0;
  color: white;
`;
