import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { addedErrorOnField } from "shared/helpers/forms";

interface Data {
  isSuccess: boolean;
  errors: ErrorResponse;
}

interface UseErrorHandlingProps {
  data: Data;
  navigateUrl?: string;
  setValues: (data: InputData[]) => void;
  setIsLoading: (val: boolean) => void;
  inputProps: InputData[];
}

export const useErrorHandling = ({ data, navigateUrl, setValues, setIsLoading, inputProps }: UseErrorHandlingProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.isSuccess) {
      setIsLoading(false);
      navigateUrl && navigate(navigateUrl);
    }

    if (data.errors) {
      setIsLoading(false);
      const errors = data.errors.errors as ErrorObject[];
      const errorMessage = (data.errors.errors as ServerResponse)?.message;
      setValues(addedErrorOnField(errors, inputProps));
      enqueueSnackbar("При отправке запроса возникла ошибка!" || errors[0]?.detail || errorMessage, {
        variant: "error",
        autoHideDuration: null,
      });
    }
  }, [navigate, navigateUrl, setValues, setIsLoading, inputProps, enqueueSnackbar, data]);
};
