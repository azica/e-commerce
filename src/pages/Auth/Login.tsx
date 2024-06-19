import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "components/Auth/LoginForm";
import { setTokenFromStorage } from "shared/helpers/localStorage";
import { useActions } from "shared/store/hooks";
import { useLazyGetUserQuery, useLoginMutation } from "shared/store/queries/auth.query";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [login, loggedData] = useLoginMutation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { setUser } = useActions();

  const [trigger, triggerUserData] = useLazyGetUserQuery();

  useEffect(() => {
    if (loggedData.isSuccess && loggedData.data) {
      setTokenFromStorage(loggedData.data as Tokens);
      trigger();
    }

    if (loggedData.error) {
      setIsLoading(false);
      enqueueSnackbar("An error occurred while sending the request!" || loggedData.error, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [loggedData, trigger]);

  useEffect(() => {
    if (triggerUserData.isSuccess) {
      setUser(triggerUserData.data as Model.User);
      enqueueSnackbar("You have logged in successfully", {
        variant: "success",
        autoHideDuration: 2000,
      });
      navigate("/");
    }

    if (triggerUserData.error) {
      setIsLoading(false);
      enqueueSnackbar("An error occurred while sending the request!" || triggerUserData.error, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [triggerUserData, setUser]);

  if (isLoading) return <h2>Loading....</h2>;

  return <LoginForm login={login} setIsLoading={setIsLoading} />;
};

export default Login;
