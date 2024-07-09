import {
	RadioGroup,
	FormControl as FormControlMui,
	FormControlLabel as FormControlLabelMui,
	Radio as RadioMui,
	Box,
} from "@mui/material";
import { styled } from "styled-components";
import { white, neutral07, black900, neutral02 } from "styles/colors";
import { InterRegular } from "styles/fonts";
import { flexAlignCenter } from "styles/mixins";

export const RadioGroupMui = styled(RadioGroup)`
	width: 100%;
	gap: 4px;

	&.bordered {
		gap: 12px;
	}
`;

export const FormControl = styled(FormControlMui)`
	width: 100%;
	position: relative;
	display: flex;
`;

export const RadioWrap = styled(Box)`
	${flexAlignCenter};
	justify-content: space-between;
 	${flexAlignCenter};
    justify-content: space-between;
    padding: 8px 16px;
	
    &.active {
        background: ${neutral02};
    }

	&.bordered {
		border-radius: 4px;
		border: 1px solid ${neutral07};
	}

	svg {
		width: 24px;
		height: 24px;
	}
`
export const RadioMark = styled(Box)`
	width: 10px;
	height: 10px;
	background: ${neutral07};
	border-radius: 50%;
`;

export const RadioContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 18px;
	background: ${white};
	border: 1px solid ${neutral07};
	border-radius: 50%;
	transition: all 0.25s ease-in-out;
`;

export const Radio = styled(RadioMui)`
	&.Mui-checked {
		> .MuiBox-root {
			background: ${white};
			border: 1px solid ${black900};
		}
	}
`;

export const FormControlLabel = styled(FormControlLabelMui)`
	.MuiFormControlLabel-label {
		font-family: ${InterRegular};
		font-size: 16px;
		line-height: 26px;
		color: ${neutral07};
	}
`;
