import { styled } from "styled-components";

import { neutral02 } from "styles/colors";

import { Container } from "../Container";

export const Wrapper = styled(Container)`
  border-top: 1px solid ${neutral02};
  display: grid;
  gap: 16px;
  padding-top: 16px;
`;
