import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useOutlet, useParams } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { layoutStyles } from "./styles";

const { Content } = layoutStyles;

export const LayoutContent = () => {
  const [noTransition, setNoTransition] = useState<boolean>(false);
  const [prevPathname, setPrevPathname] = useState<string>("");
  const params = useParams();
  const outletRef = useRef(null);
  const currentOutlet = useOutlet();

  const { key, hash, pathname } = useLocation();
  const lastItem = pathname.split("/").at(-1);

  useEffect(() => {
    const transitionPaths = ["login", "register", "password-recovery"];
    const isShopPath = pathname.includes("/shop");

    const shouldSkipTransition = transitionPaths.includes(lastItem || "") || (isShopPath && pathname === prevPathname);

    setNoTransition(shouldSkipTransition);

    if (pathname !== prevPathname) {
      setPrevPathname(pathname);
    }
  }, [params, hash, lastItem, pathname, prevPathname]);

  return (
    <Content>
      <SwitchTransition>
        <CSSTransition
          key={key}
          classNames={noTransition ? "" : "fadeIn"}
          timeout={noTransition ? 0 : 900}
          nodeRef={outletRef}
          unmountOnExit
        >
          <Box ref={outletRef}>{currentOutlet}</Box>
        </CSSTransition>
      </SwitchTransition>
    </Content>
  );
};
