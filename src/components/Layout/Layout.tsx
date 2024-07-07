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
  const { hash, pathname } = useLocation();
  const lastItem = pathname.split("/").at(-1);

  const authUrls = ["login", "register", "createPassword", "password-recovery"];
  console.log(authUrls.includes(lastItem || ""))
  return (
    <ThemeProvider theme={theme}>
      {authUrls.includes(lastItem || "") ? (
        <Container>
          <LayoutContent />
        </Container>
      ) : (
        <Wrapper>
          <Header />
          <Container className={authUrls.includes(lastItem || "") ? "" : "hasMarginTop"}>
            <LayoutContent />
          </Container>
          <NewsLetter />
          <Footer />
        </Wrapper>
      )}
    </ThemeProvider>
  );
};
