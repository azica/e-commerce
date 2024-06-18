import { Wrapper } from "./styles";

export const Badge = ({ children, greenBg, size }: Badge) => {
  return (
    <Wrapper className={greenBg ? "green" : "white"} size={size}>
      {children}
    </Wrapper>
  );
};
