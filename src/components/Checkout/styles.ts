
import { Box } from "@mui/material";
import { Container } from "components/Wrappers/Container";
import styled from "styled-components";
import { neutral04 } from "styles/colors";
import { flexColumn } from "styles/mixins";

export const Wrapper = styled(Container)`
    padding: 80px 0;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 415px;
    gap: 64px;
`

export const ColumnWrap = styled(Box)`
    padding: 16px 24px;
    ${flexColumn};
    gap: 24px;
    border: 1px solid ${neutral04};
    border-radius: 4px;
    margin-bottom: 24px;

    &.bigPadding {
        padding: 40px 24px;
    }
`

export const InputsContainer = styled(Box)`
   display: flex;
   flex-wrap: wrap;
   gap: 24px;

   .col6 {
    width: calc(100% / 2 - 12px);

   }

`