import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { MenuWrap } from "./styles";
import { NavLink } from "./NavLink";
import { navmenu } from "assets/data/mockdata";

export const NavMenu = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { pathname } = useLocation();

    return (
        <MenuWrap>
            {navmenu.map(({ id, url, ...other }, index) => (
                <NavLink
                    key={id}
                    id={id}
                    url={url}
                    active={url === pathname && isActive}
                    {...other}
                />
            ))}
        </MenuWrap>
    );
};
