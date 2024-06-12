import { Wrapper } from "./styles";

export const CardWrapper = ({ children, background, bordered }: CardWrapper) => {
  return (
    <Wrapper bordered={bordered} background={background}>
      {children}
    </Wrapper>
  );
};
