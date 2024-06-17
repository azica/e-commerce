import { useState } from "react";
import { useLocation } from "react-router-dom";

import { navmenu } from "assets/data/mockdata";

import { NavLink } from "./NavLink";
import { MenuWrap } from "./styles";

export const NavMenu = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  return (
    <MenuWrap>
      {navmenu.map(({ url, ...other }, index) => (
        <NavLink key={index + url} url={url} active={url === pathname && isActive} {...other} />
      ))}
    </MenuWrap>
  );
};
