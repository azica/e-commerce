import { Link } from "components/Link";
import { Container } from "components/Wrappers/Container";

import { Inner, Title } from "./styles";

export const SectionTopBlock = ({ title, linkName, link }: SectionTopBlock) => {
  return (
    <Container>
      <Inner>
        <Title variant="h4">{title}</Title>
        <Link linkLabel={linkName} link={link} />
      </Inner>
    </Container>
  );
};
