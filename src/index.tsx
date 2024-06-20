import { IconButton } from "@mui/material";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import { CloseIcon } from "assets/icons";
import { store } from "shared/store";
// import { GlobalStyle } from "styles/global";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
  }
`;
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        maxSnack={4}
        action={(snackbarId) => (
          <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <CloseIcon />
          </IconButton>
        )}>
        <App />
      </SnackbarProvider>
    </Provider>
  </>,
);

reportWebVitals();
