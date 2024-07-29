import { IconButton, Typography } from "@mui/material";
import { useState, useCallback } from "react";

import { HamburgerIcon, HeartIcon } from "assets/icons";
import { Drawer } from "components/Drawer";
import { Button } from "components/FormElements";
import { Logo } from "components/Logo/Index";
import { NavMenu } from "components/NavMenu";
import { ProductCart } from "components/ProductCart";
import { ProfileMenu } from "components/ProfileMenu";
import { SearchBlock } from "components/SearchBlock";
import { SocialLinks } from "components/SocialLinks";
import { Container } from "components/Wrappers/Container";
import { useIsMobile } from "hooks/useMobile";
import { useAppSelector } from "shared/store/hooks";

import { Wrapper, Inner, LogoWrap, MobileInner, WishList, WishListNumber } from "./styles";

export const Header = () => {
  const isMobile = useIsMobile(1020);
  const [open, setOpen] = useState(false);

  const { wishList } = useAppSelector((state) => state.wishlist);

  const toggleDrawer = useCallback(
    (newOpen: boolean) => () => {
      setOpen(newOpen);
    },
    [],
  );

  return (
    <Wrapper>
      <Container>
        <Inner>
          <LogoWrap>
            {isMobile && (
              <IconButton onClick={toggleDrawer(true)}>
                <HamburgerIcon />
              </IconButton>
            )}
            <Logo />
          </LogoWrap>
          {!isMobile && <NavMenu />}
          {isMobile ? null : (
            <>
              <SearchBlock />
              <ProfileMenu />
            </>
          )}
          <ProductCart />
        </Inner>
        <Drawer title="Зlegant" toggleDrawer={toggleDrawer(false)} open={open} fullWidth>
          <MobileInner>
            <SearchBlock isMobile />
            <NavMenu isMobileMenu={open} toggleDrawer={toggleDrawer(false)} />
            <ProductCart isMobile={open} />
            <WishList to="wishlist">
              <Typography>WishList</Typography>
              <WishListNumber>
                <HeartIcon />
                <span>{wishList.length}</span>
              </WishListNumber>
            </WishList>
            <Button variant="contained" size="large" link="/login" fullWidth>
              Sign In
            </Button>
            <SocialLinks isMobileMenu={open} />
          </MobileInner>
        </Drawer>
      </Container>
    </Wrapper>
  );
};

export default Header;
