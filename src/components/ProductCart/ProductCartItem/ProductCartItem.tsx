import { IconButton } from "@mui/material";

import { CloseIcon } from "assets/icons";
import { useActions } from "shared/store/hooks";

import { Title, Image, SubTitle, Wrapper, RightSide, Info } from "./styles";
import { CounterButtons } from "../CounterButtons";

export const ProductCartItem = ({ title, price, thumbnail, category, id }: Model.Product) => {
  const { removeFromCart } = useActions();

  const removeHandle = (id: number) => {
    removeFromCart(id);
  };

  return (
    <Wrapper>
      <Image>
        <img src={thumbnail} alt={title} />
      </Image>
      <Info>
        <Title>{title}</Title>
        <SubTitle>{category}</SubTitle>
        <CounterButtons productId={id} />
      </Info>
      <RightSide>
        <Title>${price}</Title>
        <IconButton onClick={() => removeHandle(id)}>
          <CloseIcon />
        </IconButton>
      </RightSide>
    </Wrapper>
  );
};
