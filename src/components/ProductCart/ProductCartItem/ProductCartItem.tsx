import { IconButton } from "@mui/material";

import { CloseIcon } from "assets/icons";
import { CounterButtons } from "components/CounterButtons";
import { useActions } from "shared/store/hooks";

import { Title, Image, SubTitle, Wrapper, RightSide, Info } from "./styles";

export const ProductCartItem = (product: Model.Product) => {
  const { removeFromCart } = useActions();

  const removeHandle = (id: number) => {
    removeFromCart(id);
  };

  return (
    <Wrapper>
      <Image>
        <img src={product.thumbnail} alt={product.title} />
      </Image>
      <Info>
        <Title>{product.title}</Title>
        <SubTitle>{product.category}</SubTitle>
        <CounterButtons product={product} outlined />
      </Info>
      <RightSide>
        <Title>${product.price}</Title>
        <IconButton onClick={() => removeHandle(product.id)}>
          <CloseIcon />
        </IconButton>
      </RightSide>
    </Wrapper>
  );
};
