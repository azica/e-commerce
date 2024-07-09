import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useOutlet, useParams } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { layoutStyles } from "./styles";

const { Content } = layoutStyles;

export const LayoutContent = () => {
  const [noTransition, setNoTransition] = useState<boolean>(false);
  const params = useParams();
  const outletRef = useRef(null);
  const currentOutlet = useOutlet();

  const { pathname } = useLocation();
  const lastItem = pathname.split("/").at(-1);

  useEffect(() => {
    const transitionPaths = ["login", "register", "password-recovery", "shopping", "checkout", "order"];

    const shouldSkipTransition = transitionPaths.includes(lastItem || "");

    setNoTransition(shouldSkipTransition);

  }, [params, lastItem, pathname]);
  return (
    <Content>
      <SwitchTransition>
        <CSSTransition
          key={pathname}
          classNames={noTransition ? "" : "fadeIn"}
          timeout={noTransition ? 0 : 300}
          nodeRef={outletRef}
          unmountOnExit
        >
          <Box ref={outletRef}>{currentOutlet}</Box>
        </CSSTransition>
      </SwitchTransition>
    </Content>
  );
};
