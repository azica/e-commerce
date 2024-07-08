import { IconButton } from "@mui/material";

import { HamburgerIcon } from "assets/icons";
import { Logo } from "components/Logo/Index";
import { NavMenu } from "components/NavMenu";
import { Container } from "components/Wrappers/Container";
import { useIsMobile } from "hooks/useMobile";
import { Wrapper, Inner, LogoWrap, MobileInner } from "./styles";
import { useState } from "react";
import { Drawer } from "components/Drawer";
import { SocialLinks } from "components/SocialLinks";
import { SearchBlock } from "components/SearchBlock";
import { ProfileMenu } from "components/ProfileMenu";
import { ProductCart } from "components/ProductCart";
import { Button } from "components/FormElements";
import { WishlistButton } from "components/WishlistButton";

export const Header = () => {
  const isMobile = useIsMobile(1020);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    setIsMobileMenu(true)
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
          {
            isMobile ? null :
              <>
                <SearchBlock />
                <ProfileMenu />
              </>
          }
          <ProductCart />
        </Inner>
        <Drawer title="Logo" toggleDrawer={toggleDrawer(false)} open={open} fullWidth>
          <MobileInner>
            <SearchBlock isMobile />
            <NavMenu isMobileMenu={isMobileMenu} />
            <ProductCart isMobileMenu={isMobileMenu} />
            <WishlistButton isMobileMenu={isMobileMenu} size="medium" />
            <Button variant="contained" size="large" link="/login" fullWidth>Sign In</Button>
            <SocialLinks isMobileMenu={isMobileMenu} />
          </MobileInner>
        </Drawer>
      </Container>
    </Wrapper>
  );
};

export default Header;
