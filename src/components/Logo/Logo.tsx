import logo from "assets/images/logo.jpg";
import whiteLogo from "assets/images/whiteLogo.png";

import { LogoWrap } from "./styles";

export const Logo = ({ link = "/", isWhite, lined }: { link?: string; isWhite?: boolean; lined?: boolean; }) => {
  return (
    <LogoWrap to={link} className={lined ? "lined" : ""}>
      <img src={isWhite ? whiteLogo : logo} alt="logo" />
      {
        lined ? <span>  </span> : null
      }
    </LogoWrap>
  );
};
