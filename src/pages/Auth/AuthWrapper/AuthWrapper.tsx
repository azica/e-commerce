import { SwitchTransition, CSSTransition } from "react-transition-group";

import logo from "assets/images/logo.jpg";
import authBg from "assets/images/authBg.jpg";

import { Content, LogoWrap, Wrapper, Image } from "./styles";
import { Outlet, useLocation } from "react-router-dom";

export const AuthWrapper = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Wrapper>
      <Image>
        <LogoWrap>
          <img src={logo} alt="logo" />
        </LogoWrap>
        <img src={authBg} alt="authBg" />
      </Image>

      <SwitchTransition>
        <CSSTransition key={pathname} timeout={300} classNames="fadeIn" unmountOnExit>
          <Content>
            <Outlet />
          </Content>
        </CSSTransition>
      </SwitchTransition>
    </Wrapper>
  );
};

