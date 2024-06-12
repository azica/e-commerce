import { Box, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { loginData } from "assets/data/form";
import { Form } from "components/Form";
import { Input, Button } from "components/FormElements";
import { Checkbox } from "components/FormElements/Checkbox";
import { FormWrapper, LinkWrapper } from "components/Wrappers";
import { getValueFromArray } from "shared/helpers/utils";

import { FormContent, InputsContainer, LinkRight, NoAccount } from "./styles";

export const LoginForm = ({
  login,
  setIsLoading,
}: {
  login: (val: Login) => void;
  setIsLoading: (val: boolean) => void;
}) => {
  const [values, setValues] = useState<InputData[]>(loginData);

  const loginHandle = () => {
    setIsLoading(true);
    const desiredValues: Login = getValueFromArray(values);
    login(desiredValues);
  };

  const valueChange: InputOnChange = (newVal) => {
    const newInputProps = values.map((item) =>
      newVal.field === item.field ? { ...item, value: newVal.value, invalid: false } : item,
    );

    setValues(newInputProps);
  };

  return (
    <FormWrapper title="Sign in">
      <Form
        afterSubmit={loginHandle}
        noSend
        mainButton={{
          name: "Sign In",
        }}
        noAccounts={
          <NoAccount variant="body2">
            Don’t have an accout yet?
            <Link to="/register"> Sign Up</Link>
          </NoAccount>
        }>
        <FormContent>
          <InputsContainer>
            {values.map(({ id, ...other }) => (
              <Fragment key={id}>
                {other.type === "checkbox" ? (
                  <Box display="flex" alignItems="center">
                    <Checkbox
                      id={id}
                      label={other.label}
                      field={other.field}
                      value={Number(other.value)}
                      checked={Boolean(other.value)}
                      onChange={valueChange}
                    />
                    <LinkRight to='/password-recovery'>Forgot password?</LinkRight>
                  </Box>
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
