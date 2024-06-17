import { ThemeProvider } from "@mui/material";

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { useIsMobile } from "hooks/useMobile";
import { useUser } from "shared/store/hooks";
import { theme } from "styles/theme";

import { LayoutContent } from "./LayoutContent";
import { layoutStyles } from "./styles";

const { Container, Wrapper } = layoutStyles;

export const Layout = () => {
  const isMobile = useIsMobile(1020);

  const isAuth = useUser();
  console.log(isAuth);
  return (
    <ThemeProvider theme={theme}>
      {isAuth ? (
        <Wrapper>
          <Header />
          <Container>
            <LayoutContent />
          </Container>
          <Footer />
        </Wrapper>
      ) : (
        <Container>
          <LayoutContent auth />
        </Container>
      )}
    </ThemeProvider>
  );
};
