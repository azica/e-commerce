import type { SnackbarKey } from "notistack";

import { IconButton } from "@mui/material";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { CloseIcon } from "assets/icons";
import { store } from "shared/store";
import { GlobalStyle } from "styles/global";

import App from "./App";

const CloseButton = ({ snackbarId }: { snackbarId: SnackbarKey }) => (
  <IconButton onClick={() => closeSnackbar(snackbarId)}>
    <CloseIcon width={16} height={16} />
  </IconButton>
);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        maxSnack={4}
        action={(snackbarId) => <CloseButton snackbarId={snackbarId} />}>
        <App />
      </SnackbarProvider>
    </Provider>
  </>,
);
