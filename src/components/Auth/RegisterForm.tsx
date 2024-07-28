import { useState } from "react";
import { Link } from "react-router-dom";

import { registerData } from "assets/data/form";
import { Form } from "components/Form";
import { InputsSpreader } from "components/FormElements/InputsSpreader";
import { FormWrapper } from "components/Wrappers";
import { getValueFromArray } from "shared/helpers/utils";

import { FormContent, InputsContainer, NoAccount } from "./styles";

interface RegisterFormProps {
  register: (val: CreateUser) => void;
  setIsLoading: (val: boolean) => void;
  isLoading: boolean;
}

export const RegisterForm = ({ register, setIsLoading, isLoading }: RegisterFormProps) => {
  const [values, setValues] = useState<InputData[]>(registerData);

  const registerHandler = () => {
    setIsLoading(true);
    const desiredValues: CreateUser = getValueFromArray(values);
    register(desiredValues);
  };

  const changeHandler: InputOnChange = (newVal) => {
    setValues((prevValues) =>
      prevValues.map((item) => (newVal.field === item.field ? { ...item, value: newVal.value, invalid: false } : item)),
    );
  };

  return (
    <FormWrapper title="Sign up">
      <Form
        autoComplete="off"
        afterSubmit={registerHandler}
        noSend
        mainButton={{
          name: "Sign Up",
          disabled: isLoading,
          preloader: { loading: isLoading },
        }}
        noAccounts={
          <NoAccount variant="body2">
            Already have an account?
            <Link to="/login"> Sign in</Link>
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
