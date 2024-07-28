import { Fragment } from "react";
import { Link } from "react-router-dom";

import { MoneyIcon } from "assets/icons";
import { ConsentLabel } from "components/FormElements/Checkbox/ConsentLabel";

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
    label: (
      <Fragment>
        Remember me
        <Link to="/password-recovery">Forgot password?</Link>
      </Fragment>
    ),
    field: "rememberMe",
    type: "checkbox",
    required: true,
    className: "rememberCheckbox",
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
    className: "col6",
  },
  {
    id: 2,
    value: "",
    field: "lastName",
    placeholder: "Last Name",
    type: "text",
    required: true,
    className: "col6",
  },
  {
    id: 3,
    value: "",
    field: "phone",
    placeholder: "Phone Number",
    type: "tel",
    required: true,
    mask: "+7 999 999 99 99",
  },
  {
    id: 4,
    value: "",
    field: "email",
    placeholder: "Your Email",
    type: "email",
    required: true,
  },
];

const shippingAddress = [
  {
    id: 1,
    value: "",
    field: "street",
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
    field: "city",
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
    className: "col6",
  },
  {
    id: 5,
    value: "",
    field: "zipCode",
    placeholder: "Zip Code",
    type: "text",
    required: true,
    className: "col6",
    mask: "999 999",
  },
  {
    id: 6,
    value: "",
    label: "Use a different billing address (optional)",
    field: "isBillingAddress",
    type: "checkbox",
  },
];

export const billingAddress = [
  {
    id: 1,
    value: "",
    field: "billingStreet",
    placeholder: "Street Address",
    type: "text",
    required: true,
  },
  {
    id: 2,
    value: "",
    field: "billingCountry",
    placeholder: "Country",
    type: "select",
    options: countries,
    required: true,
  },
  {
    id: 3,
    value: "",
    field: "billingCity",
    placeholder: "Town / City",
    type: "text",
    required: true,
  },
  {
    id: 4,
    value: "",
    field: "billingState",
    placeholder: "State",
    type: "text",
    required: true,
    className: "col6",
  },
  {
    id: 5,
    value: "",
    field: "billingZipCode",
    placeholder: "Zip Code",
    type: "text",
    required: true,
    className: "col6",
    mask: "999 999",
  },
];

const paymentOptions: CheckboxItem[] = [
  { id: 1, name: "Pay by Card Credit", value: "creditCard", afterRadioLabel: <MoneyIcon /> },
  { id: 2, name: "PayPal", value: "paypal" },
];

export const creditCard: InputData[] = [
  {
    id: 1,
    value: "",
    field: "payment",
    type: "radio",
    options: paymentOptions,
    required: true,
  },
  {
    id: 2,
    value: "",
    field: "cardNumber",
    type: "text",
    required: true,
    mask: "9999 9999 9999 9999",
    placeholder: "Card Number",
    className: "col12",
  },
  {
    id: 3,
    value: "",
    field: "cardExpiredDate",
    type: "date",
    required: true,
    className: "col6",
    placeholder: "Expiration date",
  },
  {
    id: 4,
    value: "",
    placeholder: "CVC code",
    field: "cardCvcCode",
    type: "text",
    required: true,
    className: "col6",
    mask: "999",
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
    title: "Billing Address",
    values: billingAddress,
  },
  {
    title: "Payment method",
    values: creditCard,
  },
];
