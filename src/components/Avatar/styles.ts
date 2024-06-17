import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { neutral02, neutral06, white } from "styles/colors";
import { PoppinsRegular } from "styles/fonts";

interface AvatarProps {
  size?: "small" | "medium" | "large";
}

const getSizeStyles = (size: AvatarProps["size"]) => {
  switch (size) {
    case "small":
      return `
				width: 32px;
				height: 32px;
			`;
    case "large":
    case "medium":
    default:
      return `
				width: 42px;
				height: 42px;
			`;
  }
};

export const Wrapper = styled(Box)<AvatarProps>`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white};
  flex-shrink: 0;
  border: 1px solid ${neutral02};
  ${({ size }) => getSizeStyles(size)};

  &.no-user {
    color: ${neutral06};
    box-shadow: inset 0px 0px 0px 1px ${neutral02};
  }
`;

export const Text = styled(Box)`
  font-family: ${PoppinsRegular};
  font-size: 14px;
  height: 13px;
`;

export const Image = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
