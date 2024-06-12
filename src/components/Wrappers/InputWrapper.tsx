import { FormControl, FormHelperText } from "@mui/material";

export const InputWrapper = ({ helperText, id, type, invalid, disabled, children }: InputWrapper) => (
  <FormControl variant="outlined" component={type === "checkbox" ? "fieldset" : "div"} disabled={disabled} error={invalid}>
    {children}
    <FormHelperText title={helperText} id={id}>
      {helperText}
    </FormHelperText>
  </FormControl>
);
