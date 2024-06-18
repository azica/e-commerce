import { Outlet } from "react-router-dom";

import authBg from "assets/images/authBg.jpg";
import { Logo } from "components/Logo/Index";

import { Content, LogoWrap, Wrapper, Image } from "./styles";

export const AuthWrapper = () => {
  return (
    <Wrapper>
      <Image>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <img src={authBg} alt="authBg" />
      </Image>
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  );
};
