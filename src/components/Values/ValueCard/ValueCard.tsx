import { SubTitle, Wrapper, Title, IconWrap } from "./styles";

const ValueCard = ({ title, subtitle, icon }: Value) => {
  return (
    <Wrapper>
      <IconWrap>{icon}</IconWrap>
      <Title variant="heading7">{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Wrapper>
  );
};

export default ValueCard;
