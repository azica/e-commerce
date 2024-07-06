import type { FormEvent } from "react";

import { useState } from "react";

import { EmailIcon } from "assets/icons";
import { Input } from "components/FormElements";

import { Button, Form, Wrapper } from "./styles";

export const NewsLetterForm = () => {
  const [email, setEmail] = useState("");

  const changeHandle: InputOnChange = (newVal) => {
    setEmail(String(newVal.value));
  };

  const submitHandle = (e: FormEvent) => {
    console.log("send");
  };

  return (
    <Wrapper>
      <Form component="form" onSubmit={(e) => submitHandle(e)}>
        <Input
          id={0}
          type="email"
          value={email}
          field="email"
          placeholder="Email address"
          startAdornment={<EmailIcon />}
          onChange={changeHandle}
          endAdornment={<Button>Signup</Button>}
        />
      </Form>
    </Wrapper>
  );
};
