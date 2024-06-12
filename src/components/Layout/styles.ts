import styled from "styled-components";

interface ContentProps {
  padding?: string;
}

export const layoutStyles = {
  Content: styled.div<ContentProps>`
    min-height: 100vh;
    position: relative;
    ${(props) => (props.padding === "true" ? "padding-top: 111px;" : "")}
  `,
  Container: styled.main`
    position: relative;
  `,
  Wrapper: styled.div`
    display: grid;
    margin-left: 50px;
    grid-template-columns: 236px auto;
    min-height: 100vh;
    position: relative;
    margin-bottom: 100px;
  `,
};
