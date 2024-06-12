import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SideMenuLink } from "./SideMenuLink";
import { Wrapper } from "./styles";

interface SideMenuProps {
  list: SideMenuItem[];
  commonPath: string;
}

export const SideMenu = ({ list, commonPath }: SideMenuProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsActive(pathname === commonPath);
  }, [pathname, commonPath]);

  return (
    <Wrapper>
      {list.map(({ id, url, ...other }, index) => (
        <SideMenuLink
          key={id}
          id={id}
          url={`${commonPath === "/" ? url : commonPath + url}`}
          active={index === 0 && isActive}
          {...other}
        />
      ))}
    </Wrapper>
  );
};
