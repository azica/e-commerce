import logo from "assets/images/logo.jpg";
import whiteLogo from "assets/images/whiteLogo.png";

import { LogoWrap } from "./styles";

export const Logo = ({ link = "/", isWhite }: { link?: string; isWhite?: boolean }) => {
  return (
    <LogoWrap to={link}>
      <img src={isWhite ? whiteLogo : logo} alt="logo" />
    </LogoWrap>
  );
};
