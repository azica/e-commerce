import { FormGroup as FormGroupMui, FormControl as FormControlMui } from "@mui/material";
import styled from "styled-components";

import { neutral04, neutral07 } from "styles/colors";
import { InterSemiBold } from "styles/fonts";
import { flexAlignCenter } from "styles/mixins";

export const FormGroup = styled(FormGroupMui)`
  width: 100%;
  gap: 8px;
`;

export const FormControl = styled(FormControlMui)`
  width: 100%;
  position: relative;
  display: flex;

  .MuiFormControlLabel-root {
    transition: all 0.25s ease-in-out;
    margin: 0;
    ${flexAlignCenter};
    justify-content: space-between;

    &.Mui-disabled {
      opacity: 0.5;

      &.checked {
        opacity: 1;
      }
    }
    &:hover {
      color: ${neutral07};
    }

    .MuiFormControlLabel-label {
      color: ${neutral04};
      font-family: ${InterSemiBold};
      font-size: 14px;
      line-height: 22px;
    }
  }

  .MuiCheckbox-root.Mui-checked.Mui-disabled .MuiBox-root {
    background: ${neutral04};
  }

  .MuiCheckbox-root {
    padding: 0;
  }
`;
