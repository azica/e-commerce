import { Box, IconButton, MenuItem as MuiMenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { neutral04 } from "styles/colors";
import { InterRegular } from "styles/fonts";

export const Wrapper = styled(Box)``;

export const MenuLink = styled(Link)``;

export const Button = styled(IconButton)`
    width: 40px;
    height: 40px;
`
export const MenuItem = styled(MuiMenuItem)`
    font-family: ${InterRegular};
    border-radius: 6px!important;
    color: ${neutral04}!important;

    a {
        font-family: ${InterRegular};
        color: ${neutral04};
        text-decoration: none;
    }
`