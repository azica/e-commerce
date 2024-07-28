import type { ReactNode } from "react";

import { CircularProgress } from "@mui/material";

import { Container, Content, Wrapper } from "./styles";

interface LoaderProps {
  active: boolean;
  children?: ReactNode | null;
  isStart?: boolean;
}

export const Preloader = ({ active, children, isStart }: LoaderProps) => {
  return (
    <Wrapper>
      <Container className={`${active ? "active" : ""} ${isStart ? "start" : ""}`}>
        <CircularProgress />
      </Container>
      <Content style={{ visibility: active ? "hidden" : "visible" }}>{children && children}</Content>
    </Wrapper>
  );
};
