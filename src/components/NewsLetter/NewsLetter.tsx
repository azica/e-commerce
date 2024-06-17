import { Typography } from "@mui/material";

import { NewsLetterForm } from "./NewsLetterForm";
import { Section, Content } from "./styles";

export const NewsLetter = () => {
  return (
    <Section>
      <Content>
        <Typography variant="h4">Join Our Newsletter</Typography>
        <Typography>Sign up for deals, new products and promotions</Typography>
        <NewsLetterForm />
      </Content>
    </Section>
  );
};
