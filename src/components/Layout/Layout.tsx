import { ThemeProvider } from "@mui/material";

import { Header } from "components/Header";
import { SideBar } from "components/SideBar";
import { useIsMobile } from "hooks/useMobile";
import { useUser } from "shared/store/hooks";
import { theme } from "styles/theme";

import { LayoutContent } from "./LayoutContent";
import { layoutStyles } from "./styles";

const { Container, Wrapper } = layoutStyles;

export const Layout = () => {
  const isMobile = useIsMobile(1020);

  const isAuth = useUser();

  return (
    <ThemeProvider theme={theme}>
      {isAuth ? (
        <Wrapper>
          {/* <SideBar /> */}
          <Container>
            <Header />
            <LayoutContent />
          </Container>
        </Wrapper>
      ) : (
        <Container>
          <LayoutContent auth />
        </Container>
      )}
    </ThemeProvider>
  );
};
