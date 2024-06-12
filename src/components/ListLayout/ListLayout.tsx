import { CardWrapper } from "components/Wrappers/CardWrapper";

import { Title, Wrapper, Inner, ListButton } from "./styles";

export const ListLayout = ({ title, children, buttonName, clickHandle }: ListLayout) => {
  return (
    <CardWrapper bordered="true">
      <Wrapper>
        <Title variant="h2">{title}</Title>
        <Inner>{children}</Inner>
        <ListButton variant="contained" fullWidth color="secondary" onClick={clickHandle}>
          {buttonName}
        </ListButton>
      </Wrapper>
    </CardWrapper>
  );
};

export default ListLayout;
