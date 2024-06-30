import { Typography } from "@mui/material";

import { NewsLetterForm } from "./NewsLetterForm";
import { Section, Content } from "./styles";
import { Container } from "components/Wrappers/Container";

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
