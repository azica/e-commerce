import { Box } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { useLocation, useOutlet, useParams } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { layoutStyles } from "./styles";

const { Content } = layoutStyles;

export const LayoutContent = () => {
  const [noTransition, setNoTransition] = useState<boolean | string>(false);
  const params = useParams();
  const outletRef = useRef(null);
  const currentOutlet = useOutlet();

  const { key, hash, pathname } = useLocation();
  const lastItem = pathname.split("/").at(-1);

  useLayoutEffect(() => {
    const transition =
      lastItem === "login" || lastItem === "register" || lastItem === "password-recovery" || lastItem === "shop";
    setNoTransition(hash.length > 0 || transition || params.id !== undefined);
  }, [params, hash, lastItem, pathname]);

  return (
    <Content>
      <SwitchTransition>
        <CSSTransition
          key={key}
          classNames={noTransition ? "" : "fadeIn"}
          timeout={noTransition ? 0 : 900}
          nodeRef={outletRef}
          unmountOnExit>
          {() => <Box ref={outletRef}>{currentOutlet}</Box>}
        </CSSTransition>
      </SwitchTransition>
    </Content>
  );
};
