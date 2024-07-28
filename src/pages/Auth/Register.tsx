import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

import { RegisterForm } from "components/Auth/RegisterForm";
import { useActions } from "shared/store/hooks";
import { useCreateUserMutation } from "shared/store/queries/user.query";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [createUser, createdUser] = useCreateUserMutation();
  const { enqueueSnackbar } = useSnackbar();
  const { setUser } = useActions();

  useEffect(() => {
    if (createdUser.isSuccess && createdUser.data) {
      setUser(createdUser.data as Model.User);
    }

    if (createdUser.error) {
      setIsLoading(false);
      enqueueSnackbar("An error occurred while sending the request!" || createdUser.error, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  }, [createdUser]);

  if (isLoading) return <h2>Loading....</h2>;

  return <RegisterForm register={createUser} setIsLoading={setIsLoading} isLoading={isLoading} />;
};

export default Register;
