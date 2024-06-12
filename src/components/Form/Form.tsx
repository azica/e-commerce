import type { FormEvent } from "react";

import { Box } from "@mui/material";

import { Button } from "components/FormElements";

import { FormContent, InputsContainer } from "./styles";

export const Form: Form = ({
  children,
  layout,
  afterSubmit,
  beforeSubmit,
  mainButton,
  noSend,
  autoComplete,
  linksAfterButton,
  noAccounts,
}) => {
  const sendForm = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (beforeSubmit) beforeSubmit();

    if (noSend) {
      afterSubmit({});
    }
  };

  return (
    <FormContent
      component="form"
      onSubmit={(e) => sendForm(e)}
      // @ts-ignore
      autoComplete={autoComplete}>
      {noAccounts}
      <InputsContainer layout={layout}>{children}</InputsContainer>
      <Box>
        <Button variant="contained" type="submit" {...mainButton} fullWidth>
          {mainButton.name}
        </Button>
        {linksAfterButton}
      </Box>

    </FormContent>
  );
};

export default Form;
