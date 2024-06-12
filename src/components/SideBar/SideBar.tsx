import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { sideMenu } from "assets/data/mockdata";
import { FullLogo } from "assets/icons";
import { SideMenu } from "components/SideMenu";

import { LogoWrapper, Wrapper } from "./style";

export const SideBar = () => {
  const [commonPath, setCommonPath] = useState("");
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const splitedPath = pathname.split("/");
    setCommonPath(`/${splitedPath[0]}`);
  }, [pathname]);

  return (
    <Wrapper>
      <LogoWrapper to="/">
        <FullLogo />
      </LogoWrapper>
      <SideMenu list={sideMenu} commonPath={commonPath} />
    </Wrapper>
  );
};

export default SideBar;
