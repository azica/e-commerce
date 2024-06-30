import type { ReactNode } from "react";

import { Wrapper } from "./styles";

export const Container = ({
  children,
  fullWidth,
  className,
}: {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}) => {
  return (
    <Wrapper fullwidth={fullWidth} className={className}>
      {children}
    </Wrapper>
  );
};
