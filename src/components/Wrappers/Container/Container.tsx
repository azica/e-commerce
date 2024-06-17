import type { ReactNode } from "react";

import { Wrapper } from "./styles";

export const Container = ({ children, fullWidth }: { children: ReactNode; fullWidth?: boolean }) => {
  return <Wrapper fullwidth={fullWidth}>{children}</Wrapper>;
};
