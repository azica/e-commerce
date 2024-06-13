import styled from "styled-components";

interface ContentProps {
  padding?: string;
}

export const layoutStyles = {
  Content: styled.div<ContentProps>`
    min-height: 100vh;
    position: relative;
    ${(props) => (props.padding === "true" ? "padding-top: 60px;" : "")}
  `,
  Container: styled.main`
    position: relative;
  `,
  Wrapper: styled.div`
    min-height: 100vh;
    position: relative;
  `,
};
