import { useState } from "react";
import { useLocation } from "react-router-dom";

import { navMenu } from "assets/data/mockdata";
import { useIsMobile } from "hooks/useMobile";

import { NavLink } from "./NavLink";
import { MenuWrap } from "./styles";

export const NavMenu = ({ isMobileMenu, toggleDrawer }: { isMobileMenu?: boolean; toggleDrawer?: () => void }) => {
  const [isActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  const isMobile = useIsMobile(1020);

  const className = `${isMobile ? "mobileMenu" : ""} ${isMobileMenu ? "isMobileMenu" : ""}`.trim();
  return (
    <MenuWrap className={className}>
      {navMenu.map(({ url, ...other }, index) => (
        <NavLink key={index + url} url={url} active={url === pathname && isActive} {...other} onClick={toggleDrawer} />
      ))}
    </MenuWrap>
  );
};
