import type { ReactNode } from "react";

import { Wrapper, Title } from "./styles";

interface FormTemplateProps {
  title: string;
  children: ReactNode;
}

export const FormWrapper = ({ title, children }: FormTemplateProps) => {
  return (
    <Wrapper>
      {/* {link ? <BackButton link={link} /> : null} */}

      <Title variant="h4">{title}</Title>
      {children}
    </Wrapper>
  );
};
