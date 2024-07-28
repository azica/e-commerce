import styled from "styled-components";

import { flexColumn, scrollBar } from "styles/mixins";

const Wrapper = styled.div`
  ${flexColumn};
  gap: 12px;
  position: relative;

  &.grid1 {
    height: 235px;
    ${scrollBar};
    align-items: flex-start;
    overflow-y: scroll;
  }
`;

export { Wrapper };
