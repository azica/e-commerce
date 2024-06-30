import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import { navMenu } from "assets/data/mockdata";
import { Logo } from "components/Logo/Logo";
import { SocialLinks } from "components/SocialLinks";
import { Container } from "components/Wrappers/Container";

import { FooterLink, FooterWrap, Slogan, FooterBottomBar, Copyright } from "./styles";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrap>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
          <Box display="flex" alignItems="center" gap={3} flexWrap="wrap">
            <Logo isWhite />
            <span> | </span>
            <Slogan fontFamily="fontFamily.interRegular" color="primary.300">
              Gift & Decoration Store
            </Slogan>
          </Box>
          <Box display="flex" alignItems="center" gap={3}>
            {navMenu.map((link) => (
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
