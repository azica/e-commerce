import { AddIcon, MinusIcon } from "assets/icons";
import { useActions, useAppSelector } from "shared/store/hooks";

import { Wrapper, Button } from "./styles";

export const CounterButtons = ({ productId }: { productId: number }) => {
  const { incrementQuantity, decrementQuantity } = useActions();
  const product = useAppSelector((state) => state.cart.cartList.find((item) => item.id === productId));

  const handleIncrement = () => {
    incrementQuantity(productId);
  };

  const handleDecrement = () => {
    decrementQuantity(productId);
  };

  return (
    <Wrapper>
      <Button onClick={handleDecrement} disabled={!product}>
        <MinusIcon />
      </Button>
      <span>{product?.quantity || 0}</span>
      <Button onClick={handleIncrement}>
        <AddIcon />
      </Button>
    </Wrapper>
  );
};
