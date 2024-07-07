import { MinusIcon, PlusIcon } from "assets/icons";
import { useActions, useAppSelector } from "shared/store/hooks";

import { Wrapper, Button } from "./styles";

export const CounterButtons = ({
  product,
  outlined,
  isBig,
}: {
  product: Model.Product;
  outlined?: boolean;
  isBig?: boolean;
}) => {
  const { incrementQuantity, decrementQuantity } = useActions();
  const updatedProduct = useAppSelector((state) => state.cart.cartList.find((item) => item.id === product.id));

  const handleIncrement = (product: Model.Product) => {
    incrementQuantity(product as Model.CartItem);
  };

  const handleDecrement = (product: Model.Product) => {
    decrementQuantity(product.id);
  };

  const className = `${outlined ? "outlined" : ""} ${isBig ? "big" : ""}`;
  return (
    <Wrapper className={className}>
      <Button onClick={() => handleDecrement(product)} disabled={!product}>
        <MinusIcon />
      </Button>
      <span>{updatedProduct?.quantity || 0}</span>
      <Button onClick={() => handleIncrement(product)}>
        <PlusIcon />
      </Button>
    </Wrapper>
  );
};
