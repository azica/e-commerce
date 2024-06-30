import { Link } from "components/Link";

import { Title, Wrapper } from "./styles";

export const SectionTopBlock = ({ title, linkName, link }: SectionTopBlock) => {
  return (
    <Wrapper>
      <Title variant="h4" color="primary.700">
        {title}
      </Title>
      <Link linkLabel={linkName} link={link} />
    </Wrapper>
  );
};
