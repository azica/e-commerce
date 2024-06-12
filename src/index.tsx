import { SnackbarProvider } from "notistack";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "shared/store";

import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <SnackbarProvider anchorOrigin={{ vertical: "bottom", horizontal: "right" }} maxSnack={4}>
      <App />
    </SnackbarProvider>
  </Provider>,
);

reportWebVitals();
