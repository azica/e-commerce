import { IconButton } from "@mui/material";

import { HamburgerIcon } from "assets/icons";
import { Logo } from "components/Logo/Index";
import { NavMenu } from "components/NavMenu";
import { Container } from "components/Wrappers/Container";
import { useIsMobile } from "hooks/useMobile";

import { HeaderActions } from "./HeaderActions";
import { Wrapper, Inner, LogoWrap } from "./styles";

export const Header = () => {
  const isMobile = useIsMobile(1020);

  return (
    <Wrapper>
      <Container>
        <Inner>
          <LogoWrap>
            {isMobile ? (
              <IconButton>
                <HamburgerIcon />
              </IconButton>
            ) : null}
            <Logo />
          </LogoWrap>
          <NavMenu />
          <HeaderActions />
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
