import { Box, IconButton } from "@mui/material";
import styled from "styled-components";
import { neutral04 } from "styles/colors";

export const Wrapper = styled(Box)`
    .MuiInputBase-root {
        border: 1px solid ${neutral04};
        border-radius: 6px;
        padding: 10px 16px;
    }
`
export const Button = styled(IconButton)`
    width: 40px;
    height: 40px;
`