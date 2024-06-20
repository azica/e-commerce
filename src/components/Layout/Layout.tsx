import { ThemeProvider } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { NewsLetter } from "components/NewsLetter";
import { theme } from "styles/theme";

import { LayoutContent } from "./LayoutContent";
import { layoutStyles } from "./styles";

const { Container, Wrapper } = layoutStyles;

export const Layout = () => {
  const [showNewsLetterSection, setShowNewsLetterSection] = useState(false);

  const { hash, pathname } = useLocation();
  const lastItem = pathname.split("/").at(-1);

  useLayoutEffect(() => {
    setShowNewsLetterSection(lastItem === "" || lastItem === "shop");
  }, [hash, lastItem, pathname]);

  const authUrls = ["login", "register", "createPassword", "password-recovery"];

  return (
    <ThemeProvider theme={theme}>
      {authUrls.includes(lastItem || "") ? (
        <Container>
          <LayoutContent />
        </Container>
      ) : (
        <Wrapper>
          <Header />
          <Container>
            <LayoutContent />
          </Container>
          {showNewsLetterSection && <NewsLetter />}
          <Footer />
        </Wrapper>
      )}
    </ThemeProvider>
  );
};
