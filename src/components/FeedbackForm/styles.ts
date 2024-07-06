import { Box } from "@mui/material";
import styled from "styled-components";
import { neutral03, neutral07 } from "styles/colors";

export const Form = styled("form")`
    &  .MuiInputBase-root {
        border: 2px solid ${neutral03};
        border-radius: 16px;
        padding: 16px 16px 16px 24px;
    }

    &  button {
        white-space: nowrap;
        border-radius: 80px;
    }
`