import { Title, Wrapper } from "./styles";

export const ListItem = ({ title, beforeNode, afterNode, layout }: ListItem) => {
  return (
    <Wrapper layout={layout}>
      {beforeNode}
      <Title>{title}</Title>
      {afterNode}
    </Wrapper>
  );
};
