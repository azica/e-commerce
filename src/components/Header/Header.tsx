import { IconButton } from "@mui/material";

import { HamburgerIcon } from "assets/icons";
import { Logo } from "components/Logo/Index";
import { NavMenu } from "components/NavMenu";
import { Container } from "components/Wrappers/Container";
import { useIsMobile } from "hooks/useMobile";

import { HeaderActions } from "./HeaderActions";
import { Wrapper, Inner, LogoWrap } from "./styles";
import { useState } from "react";
import { Drawer } from "components/Drawer";
import { SocialLinks } from "components/SocialLinks";

export const Header = () => {
  const isMobile = useIsMobile(1020);
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Wrapper>
      <Container>
        <Inner>
          <LogoWrap>
            {isMobile ? (
              <IconButton onClick={toggleDrawer(true)}>
                <HamburgerIcon />
              </IconButton>
            ) : null}
            <Logo />
          </LogoWrap>
          <NavMenu />
          <HeaderActions />
        </Inner>
        <Drawer title="Logo" toggleDrawer={() => toggleDrawer(false)} open={open}>
          <NavMenu />
          <HeaderActions />
          <SocialLinks />
        </Drawer>
      </Container>
    </Wrapper>
  );
};

export default Header;
