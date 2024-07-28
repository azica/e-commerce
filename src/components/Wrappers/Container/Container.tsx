import { Wrapper } from "./styles";

export const Container = ({ children, fullWidth, className }: Container) => {
  return (
    <Wrapper fullwidth={fullWidth} className={className}>
      {children}
    </Wrapper>
  );
};
