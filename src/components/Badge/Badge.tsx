import { Wrapper } from "./styles";

export const Badge = ({ children, greenBg, size }: Badge) => {
  return (
    <Wrapper greenBg={greenBg} size={size}>
      {children}
    </Wrapper>
  );
};
