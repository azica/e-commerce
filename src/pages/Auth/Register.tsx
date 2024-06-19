import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterForm } from "components/Auth/RegisterForm";
import { useActions } from "shared/store/hooks";
import { useLazyGetUserQuery } from "shared/store/queries/auth.query";
import { useCreateUserMutation } from "shared/store/queries/user.query";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [createUser, createdUser] = useCreateUserMutation();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { setUser } = useActions();

  const [trigger, triggerUserData] = useLazyGetUserQuery();

  useEffect(() => {
    if (createdUser.isSuccess && createdUser.data) {
      setUser(createdUser.data as Model.User);
      trigger();
    }

    if (createdUser.error) {
      setIsLoading(false);
      enqueueSnackbar("An error occurred while sending the request!" || createdUser.error, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [createdUser, trigger]);

  useEffect(() => {
    if (triggerUserData.isSuccess) {
      setUser(triggerUserData.data as Model.User);
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

  return <RegisterForm register={createUser} setIsLoading={setIsLoading} isLoading={isLoading} />;
};

export default Register;
