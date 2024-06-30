import { MinusIcon, PlusIcon } from "assets/icons";
import { useActions, useAppSelector } from "shared/store/hooks";

import { Wrapper, Button } from "./styles";

export const CounterButtons = ({
  productId,
  outlined,
  isBig,
}: {
  productId: number;
  outlined?: boolean;
  isBig?: boolean;
}) => {
  const { incrementQuantity, decrementQuantity } = useActions();
  const product = useAppSelector((state) => state.cart.cartList.find((item) => item.id === productId));

  const handleIncrement = () => {
    incrementQuantity(productId);
  };

  const handleDecrement = () => {
    decrementQuantity(productId);
  };

  const className = `${outlined ? "outlined" : ""} ${isBig ? "big" : ""}`;
  return (
    <Wrapper className={className}>
      <Button onClick={handleDecrement} disabled={!product}>
        <MinusIcon />
      </Button>
      <span>{product?.quantity || 0}</span>
      <Button onClick={handleIncrement}>
        <PlusIcon />
      </Button>
    </Wrapper>
  );
};
