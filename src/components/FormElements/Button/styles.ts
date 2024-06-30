import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { white, black, blue, textBlue, neutral07, green, neutral04 } from "styles/colors";
import { InterMedium } from "styles/fonts";
import { rgba } from "styles/mixins";

interface ButtonProps {
	secondary?: string;
	variant: string;
	inside?: string;
	size?: "large" | "small" | "medium" | "extraSmall";
	fullWidth?: boolean;
	color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}

const getSize = (size: ButtonProps["size"]) => {
	switch (size) {
		case "extraSmall":
			return `
				font-size: 14px;
				line-height: 24px;
				border-radius: 4px;
				padding: 4px 16px;
				height: 32px;
			`;
		case "small":
			return `
				font-size: 16px;
				line-height: 28px;
				border-radius: 8px;
				padding: 8px 24px;
				height: 40px;
			`;
		case "large":
			return `
				font-size: 18px;
				line-height: 32px;
				letter-spacing: -0.4px;
				border-radius: 8px;
				padding: 10px 40px;
				height: 52px;

				svg {
					width: 24px;
					height: 24px;
				}
					
			`;
		case "medium":
		default:
			return `
				font-size: 16px;
				line-height: 28px;
				letter-spacing: -0.4px;
				border-radius: 8px;
				padding: 8px 24px;
				height: 46px;

				svg {
					width: 24px;
					height: 24px;
				}
			`;
	}
};

const getColor = (color: ButtonProps["color"]) => {
	switch (color) {
		case "info":
			return `
				background: ${blue};
				color: ${textBlue};

				&:hover {
					background: ${rgba(blue, 0.5)};
					color: ${white};
				}
			`;
		case "primary":
			return `
				background: ${neutral07};
				color: ${white};

				&:hover {
					background: ${rgba(neutral07, 0.5)};
					color: ${white};
					border-color: ${rgba(neutral07, 0.5)};
				}
					
			`;
		case "secondary":
			return `
				background: ${green};
				color: ${white};

				&:hover {
					background: ${rgba(green, 0.5)};
					color: ${white};
				}
			`;
	}
};

const getVariant = (variant: ButtonProps["variant"]) => {
	switch (variant) {
		case "outlined":
			return `
				background: ${white};
				color: ${textBlue};
				border: 1px solid ${neutral07} !important;

			&:hover: {
				background: ${white}!important;
				border: 1px solid ${neutral07} !important;
			}
		`;
		case "text":
			return `
				background: transparent;
				color: ${neutral04};
		
		`;
	}
};

export const ButtonCustom = styled(Button) <ButtonProps>`
	font-family: ${InterMedium};
	font-weight: normal;
	text-transform: none;
	box-Shadow: none !important;
	align-items: center;
	${({ size }) => getSize(size)}
	${({ color }) => getColor(color)}
	${({ variant }) => getVariant(variant)}
	${(fullWidth) => (fullWidth ? "" : "width: 100%;")}
	
		&.disabled {
			pointer - events: none;
			color: ${neutral04};
		}

		&.Mui-disabled {
			color: ${black};
			
			.MuiButton-startIcon {
				stroke: ${neutral04};
				}
			}

			.MuiButton-startIcon {
				stroke: ${black};
			}
	}
`;

export const Content = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;
  gap: 8px;

  .MuiCircularProgress - root {
    position: absolute;
    right: -30px;
  }
`;

export const ButtomWrapper = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;

  .MuiCircularProgress - root {
    margin-left: 16px;
  }
`;
