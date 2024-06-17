import { useLayoutEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { layoutStyles } from "./styles";
const { Content } = layoutStyles;

interface LayoutContentProps {
  auth?: boolean;
}

export const LayoutContent = ({ auth }: LayoutContentProps) => {
  const [noTransition, setNoTransition] = useState<boolean | string>(false);
  const params = useParams();
  const { key, hash, pathname } = useLocation();
  const lastItem = pathname.split("/").at(-1);

  useLayoutEffect(() => {
    const transition =
      lastItem === "login" || lastItem === "register" || lastItem === "password-recovery" || lastItem === "shop";
    setNoTransition(hash.length > 0 || transition || params.id !== undefined);
  }, [params, hash, lastItem, pathname]);

  const authUrls = ["login", "register", "createPassword", "password-recovery"];

  return (
    <Content padding={authUrls.includes(lastItem || "") ? undefined : "true"}>
      <SwitchTransition>
        <CSSTransition key={key} classNames={noTransition ? "" : "fadeIn"} timeout={noTransition ? 0 : 250} unmountOnExit>
          <Outlet />
        </CSSTransition>
      </SwitchTransition>
    </Content>
  );
};
