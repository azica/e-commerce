import { Checkbox, Box, FormControlLabel as FormControlLabelMui } from "@mui/material";
import { styled as styledMui } from "@mui/material/styles";
import styled from "styled-components";

import { CheckIcon } from "assets/icons";
import { white, neutral04, neutral07, neutral08 } from "styles/colors";
import { InterRegular } from "styles/fonts";

export const CheckMark = styled(CheckIcon)`
  stroke: ${neutral08};
`;

export const CheckContainer = styledMui(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
	width: 24px;
	height: 24px;
	background: ${white};
    border: 1px solid ${neutral04};
	border-radius: 4px;
    margin-left: 3px;
`;

export const CheckboxMui = styledMui(Checkbox)`
    &.Mui-checked {
        .MuiBox-root {
            background: ${neutral07};
            border: 1px solid ${neutral07};
        }
    }
`;

export const FormControlLabel = styledMui(FormControlLabelMui)`
    .MuiFormControlLabel-label {
        font-family: ${InterRegular};
        font-size: 16px;
        line-height: 26px;
        color: ${neutral04};
        font-weight: normal;
    }
`;
