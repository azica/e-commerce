import { Box } from "@mui/material";
import styled from "styled-components";
import { neutral03 } from "styles/colors";

export const Form = styled("form")`
    &  .MuiOutlinedInput-root {
        border: 2px solid ${neutral03};
        border-radius: 16px;
        padding: 16px 16px 16px 24px;

        &:focused, &:hover {
            border-width: 2px!important;
        }
    }

    &  button {
        white-space: nowrap;
        border-radius: 80px;
    }
`