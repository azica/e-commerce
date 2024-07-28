import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { LoginForm } from "components/Auth/LoginForm";
import { setTokenFromStorage } from "shared/helpers/localStorage";
import { useActions } from "shared/store/hooks";
import { useLazyGetUserQuery, useLoginMutation } from "shared/store/queries/auth.query";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [login, loggedData] = useLoginMutation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || "/";
  const { setUser } = useActions();
  const [trigger, triggerUserData] = useLazyGetUserQuery();

  useEffect(() => {
    if (loggedData.isSuccess && loggedData.data) {
      console.log(rememberMe);
      setTokenFromStorage(loggedData.data as Tokens);
      trigger();
    }

    if (loggedData.error) {
      setIsLoading(false);
      enqueueSnackbar(
        loggedData.error instanceof Error ? loggedData.error.message : "An error occurred while sending the request!",
        {
          variant: "error",
          autoHideDuration: 2000,
        },
      );
    }
  }, [loggedData, trigger, enqueueSnackbar]);

  useEffect(() => {
    if (triggerUserData.isSuccess) {
      setUser(triggerUserData.data as Model.User);
      enqueueSnackbar("You have logged in successfully", {
        variant: "success",
        autoHideDuration: 2000,
      });
      navigate(fromPage);
    }

    if (triggerUserData.error) {
      setIsLoading(false);
      enqueueSnackbar(
        triggerUserData.error instanceof Error
          ? triggerUserData.error.message
          : "An error occurred while sending the request!",
        {
          variant: "error",
          autoHideDuration: 2000,
        },
      );
    }
  }, [triggerUserData, setUser, enqueueSnackbar, navigate]);

  return <LoginForm login={login} setIsLoading={setIsLoading} isLoading={isLoading} setRememberMe={setRememberMe} />;
};

export default Login;
