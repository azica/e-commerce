import { useState } from "react";
import { Link } from "react-router-dom";

import { loginData } from "assets/data/form";
import { Form } from "components/Form";
import { InputsSpreader } from "components/FormElements/InputsSpreader";
import { FormWrapper } from "components/Wrappers";
import { getValueFromArray } from "shared/helpers/utils";

import { FormContent, InputsContainer, NoAccount } from "./styles";

interface LoginFormProps {
  login: (val: Login) => void;
  setIsLoading: (val: boolean) => void;
  isLoading: boolean;
  setRememberMe: (val: boolean) => void;
}

export const LoginForm = ({ login, setIsLoading, isLoading, setRememberMe }: LoginFormProps) => {
  const [values, setValues] = useState<InputData[]>(loginData);

  const loginHandler = () => {
    setIsLoading(true);
    const desiredValues: Login = getValueFromArray(values);
    login(desiredValues);
    const rememberMe = values.find((el) => el.field === "rememberMe");
    if (rememberMe?.value === true) {
      setRememberMe(true);
    }
  };

  const changeHandler: InputOnChange = (newVal) => {
    setValues((prevValues) =>
      prevValues.map((item) => (newVal.field === item.field ? { ...item, value: newVal.value, invalid: false } : item)),
    );
  };

  return (
    <FormWrapper title="Sign in">
      <Form
        afterSubmit={loginHandler}
        noSend
        mainButton={{
          name: "Sign In",
          preloader: { loading: isLoading },
          disabled: isLoading,
        }}
        noAccounts={
          <NoAccount variant="body2">
            Don’t have an accout yet?
            <Link to="/register"> Sign Up</Link>
          </NoAccount>
        }>
        <FormContent>
          <InputsContainer>
            {values.map((input) => (
              <InputsSpreader key={input.id} onChange={changeHandler} {...input} />
            ))}
          </InputsContainer>
        </FormContent>
      </Form>
    </FormWrapper>
  );
};
