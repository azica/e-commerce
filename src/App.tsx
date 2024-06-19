import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { getTokensFromStorage } from "shared/helpers/localStorage";
import { Navigation } from "shared/router/Navigation";
import { useActions } from "shared/store/hooks";
import { useLazyGetUserQuery } from "shared/store/queries/auth.query";
import { GlobalStyle } from "styles/global";

const App = () => {
  const { setUser } = useActions();
  const [trigger, triggerUserData] = useLazyGetUserQuery();
  const token = getTokensFromStorage();

  useEffect(() => {
    if (token) {
      trigger();
    }
  }, []);

  useEffect(() => {
    triggerUserData.isSuccess && setUser(triggerUserData.data as Model.User);
  }, [triggerUserData, setUser]);

  return (
    <BrowserRouter>
      <Navigation />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
