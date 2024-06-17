import styled from "styled-components";

import { neutral04, neutral01 } from "styles/colors";
import { flexColumn, scrollBar } from "styles/mixins";

const Wrapper = styled.div`
  ${flexColumn};
  gap: 12px;
  height: 235px;
  ${scrollBar};
  align-items: flex-start;
  overflow-y: scroll;
`;

export { Wrapper };
