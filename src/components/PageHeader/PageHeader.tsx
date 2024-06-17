import { Section, Title, SubTitle, Inner } from "./styles";

export const PageHeader = ({ title, bg, subtitle, breadcrumbs }: PageHeader) => {
  return (
    <Section bg={bg}>
      <Inner>
        {breadcrumbs}
        <Title variant="h3">{title}</Title>
        <SubTitle variant="body1">{subtitle}</SubTitle>
      </Inner>
    </Section>
  );
};
