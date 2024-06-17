import { Logo } from "components/Logo/Index";
import { NavMenu } from "components/NavMenu";
import { Container } from "components/Wrappers/Container";

import { HeaderActions } from "./HeaderActions";
import { Wrapper, Inner } from "./styles";

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Logo />
          <NavMenu />
          <HeaderActions />
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
