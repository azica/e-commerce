import { Logo } from "components/Logo/Index";
import { Container } from "components/Wrappers/Container";
import { NavMenu } from "components/NavMenu";

import { Wrapper, Inner } from "./styles";
import { HeaderActions } from "./HeaderActions";

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
