import { ConsentLabel } from "components/FormElements/Checkbox/ConsentLabel";
import { MoneyIcon } from 'assets/icons';
import { countries } from "./countries";

export const loginData = [
  {
    id: 1,
    value: "",
    field: "email",
    placeholder: "Email address",
    type: "email",
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
    id: 1,
    value: "",
    field: "name",
    placeholder: "Your name",
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

const contactInformation = [
  {
    id: 1,
    value: "",
    field: "firstName",
    placeholder: "First Name",
    type: "text",
    required: true,
    className: "col6"
  },
  {
    id: 2,
    value: "",
    field: "lastName",
    placeholder: "Last Name",
    type: "text",
    required: true,
    className: "col6"
  },
  {
    id: 3,
    value: "",
    field: "phone",
    placeholder: "Phone Number",
    type: "tel",
    required: true,
    mask: "+7 999 999 99 99"
  },
  {
    id: 4,
    value: "",
    field: "email",
    placeholder: "Your Email",
    type: "email",
    required: true,
  },
]

const shippingAddress = [
  {
    id: 1,
    value: "",
    field: "streetAddress",
    placeholder: "Street Address",
    type: "text",
    required: true,
  },
  {
    id: 2,
    value: "",
    field: "country",
    placeholder: "Country",
    type: "select",
    options: countries,
    required: true,
  },
  {
    id: 3,
    value: "",
    field: "town/city",
    placeholder: "Town / City",
    type: "text",
    required: true,
  },
  {
    id: 4,
    value: "",
    field: "state",
    placeholder: "State",
    type: "text",
    required: true,
    className: "col6"
  },
  {
    id: 5,
    value: "",
    field: "zip-code",
    placeholder: "Zip Code",
    type: "text",
    required: true,
    className: "col6",
    mask: "999 999"
  },
  {
    id: 6,
    value: "",
    label: "Use a different billing address (optional)",
    field: "billing",
    type: "checkbox",
    required: true,
  },
]

const paymentOptions: CheckboxItem[] = [
  { id: 1, name: "Pay by Card Credit", value: "creditCard", afterRadioLabel: <MoneyIcon /> },
  { id: 2, name: "PayPal", value: "paypal" },
]

export const creditCard: InputData[] = [
  {
    id: 1,
    value: "",
    field: "creditCard",
    type: "text",
    required: true,
    mask: "1234 1234 1234",
    placeholder: "1234 1234 1234"
  },
  {
    id: 2,
    value: "MM/YY",
    field: "expiredDate",
    type: "date",
    required: true,
    className: "col6"
  },
  {
    id: 3,
    value: "CVC code",
    placeholder: "CVC code",
    field: "cvc",
    type: "text",
    required: true,
    className: "col6",
    mask: "123"
  },
];

export const shippingForm = [
  {
    title: "Contact Infomation",
    values: contactInformation,
  },
  {
    title: "Shipping Address",
    values: shippingAddress,
  },
  {
    title: "Payment method",
    values: [
      {
        id: 1,
        value: "",
        field: "payment",
        type: "radio",
        options: paymentOptions,
        required: true,
      },
    ]
  }
]

