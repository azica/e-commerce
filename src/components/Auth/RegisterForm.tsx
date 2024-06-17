import { Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { registerData } from "assets/data/form";
import { Form } from "components/Form";
import { Input, Button } from "components/FormElements";
import { Checkbox } from "components/FormElements/Checkbox";
import { FormWrapper, LinkWrapper } from "components/Wrappers";
import { getValueFromArray } from "shared/helpers/utils";

import { FormContent, InputsContainer, NoAccount } from "./styles";

export const RegisterForm = ({
  register,
  setIsLoading,
  isLoading,
}: {
  register: (val: CreateUser) => void;
  setIsLoading: (val: boolean) => void;
  isLoading: boolean;
}) => {
  const [values, setValues] = useState<InputData[]>(registerData);
  const [isDisabled, setIsDisabled] = useState(true);

  const registerHandle = () => {
    setIsLoading(true);
    const desiredValues: CreateUser = getValueFromArray(values);
    register(desiredValues);
  };

  const comparePassword = (newInputProps: InputData[]) => {
    const newProps = newInputProps;
    const noMatch = newProps[2].value !== newProps[3].value;

    newProps[3] = {
      ...newProps[3],
      invalid: noMatch,
    };

    setIsDisabled(noMatch);
    setValues(newProps);
  };

  const valueChange: InputOnChange = (newVal) => {
    const newInputProps = values.map((item) =>
      newVal.field === item.field ? { ...item, value: newVal.value, invalid: false } : item,
    );

    comparePassword(newInputProps);
  };

  return (
    <FormWrapper title="Sign up">
      <Form
        autoComplete="off"
        afterSubmit={registerHandle}
        noSend
        mainButton={{
          name: "Sign Up",
          disabled: isDisabled || isLoading,
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
            {values.map(({ id, ...other }) => (
              <Fragment key={id}>
                {other.type === "checkbox" ? (
                  <Checkbox
                    id={id}
                    label={other.label}
                    field={other.field}
                    value={Number(other.value)}
                    checked={Boolean(other.value)}
                    onChange={valueChange}
                  />
                ) : (
                  <Input id={id} {...other} onChange={valueChange} />
                )}
              </Fragment>
            ))}
          </InputsContainer>
        </FormContent>
      </Form>
    </FormWrapper>
  );
};
