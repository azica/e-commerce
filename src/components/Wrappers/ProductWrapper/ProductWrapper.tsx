import type { ReactNode } from "react";

import { Wrapper } from "./styles";

export const ProductWrapper = ({ children, fullWidth }: { children: ReactNode; fullWidth?: boolean }) => {
    return <Wrapper fullWidth={fullWidth}>{children}</Wrapper>;
};
