import { Typography } from "@mui/material";

import { Container } from "components/Wrappers/Container";

import { NewsLetterForm } from "./NewsLetterForm";
import { Section, Content } from "./styles";

export const NewsLetter = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Typography variant="h4">Join Our Newsletter</Typography>
          <Typography>Sign up for deals, new products and promotions</Typography>
          <NewsLetterForm />
        </Content>
      </Container>
    </Section>
  );
};
