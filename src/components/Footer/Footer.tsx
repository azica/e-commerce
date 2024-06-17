import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import { navmenu } from "assets/data/mockdata";
import { Logo } from "components/Logo/Logo";
import { SocialLinks } from "components/SocialLinks";
import { Container } from "components/Wrappers/Container";

import { FooterLink, FooterWrap, Slogan, FooterBottomBar, Copyright } from "./styles";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrap>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={3}>
            <Logo isWhite />
            <span> | </span>
            <Slogan> Gift & Decoration Store</Slogan>
          </Box>
          <Box display="flex" alignItems="center" gap={3}>
            {navmenu.map((link) => (
              <FooterLink to={link.url} key={link.id}>
                {link.title}
              </FooterLink>
            ))}
          </Box>
        </Box>
        <FooterBottomBar>
          <Copyright>Copyright &copy; {currentYear} 3legant. All rights reserved</Copyright>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="terms-of-use">Terms of Use</Link>
          <SocialLinks />
        </FooterBottomBar>
      </Container>
    </FooterWrap>
  );
};
