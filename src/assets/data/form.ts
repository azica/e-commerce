import { ConsentLabel } from "components/FormElements/Checkbox/ConsentLabel";

export const loginData = [
  {
    id: 1,
    value: "",
    field: "username",
    placeholder: "Your username or email address",
    type: "text",
    required: true,
  },
  {
    id: 2,
    value: "",
    field: "password",
    placeholder: "Пароль",
    type: "password",
    required: true,
  },
  {
    id: 3,
    value: 0,
    label: "Remember me",
    field: "remember",
    type: "checkbox",
    required: true,
  },
];

export const registerData = [
  {
    id: 0,
    value: "",
    field: "name",
    placeholder: "Your name",
    type: "text",
    required: true,
  },
  {
    id: 1,
    value: "",
    placeholder: "Username",
    field: "username",
    type: "text",
    required: true,
  },
  {
    id: 2,
    value: "",
    field: "email",
    placeholder: "E-mail address",
    type: "email",
    required: true,
    invalid: false,
  },
  {
    id: 3,
    value: "",
    field: "password",
    placeholder: "Password",
    type: "password",
    required: true,
  },
  {
    value: true,
    field: "consent",
    type: "checkbox",
    id: 4,
    label: ConsentLabel({ centered: false }),
    required: true,
  },
];
