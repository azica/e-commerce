import { CircularProgress } from "@mui/material";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { Container, Content, Wrapper } from "./styles";

interface LoaderProps {
  active: boolean;
  children?: JSX.Element;
}

export const Preloader = ({ active, children }: LoaderProps) => {
  return (
    <Wrapper>
      {/* <SwitchTransition mode='out-in'>
				<CSSTransition
					key={active ? "preloader" : "content"}
					timeout={300}
					classNames='fade'>
					{active ? ( */}
      <Container className={active ? "active" : ""}>
        <CircularProgress />
      </Container>
      {/* ) : ( */}
      <Content style={{ visibility: active ? "hidden" : "visible" }}>{children && children}</Content>
      {/* )} */}
      {/* </CSSTransition>
			</SwitchTransition> */}
    </Wrapper>
  );
};
