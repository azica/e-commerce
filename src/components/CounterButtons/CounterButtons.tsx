import { MinusIcon, PlusIcon } from "assets/icons";
import { useActions, useAppSelector } from "shared/store/hooks";

import { Wrapper, Button } from "./styles";

interface CounterButtonsProps {
  product: Model.Product;
  outlined?: boolean;
  isBig?: boolean;
}

export const CounterButtons = ({ product, outlined, isBig }: CounterButtonsProps) => {
  const { incrementQuantity, decrementQuantity } = useActions();
  const updatedProduct = useAppSelector((state) => state.cart.cartList.find((item) => item.id === product.id));

  const handleIncrement = () => {
    if (product) {
      incrementQuantity(product as Model.CartItem);
    }
  };

  const handleDecrement = () => {
    if (product) {
      decrementQuantity(product.id);
    }
  };

  const className = `${outlined ? "outlined" : ""} ${isBig ? "big" : ""}`;

  return (
    <Wrapper className={className}>
      <Button onClick={handleDecrement} disabled={!updatedProduct?.quantity}>
        <MinusIcon />
      </Button>
      <span>{updatedProduct?.quantity || 0}</span>
      <Button onClick={handleIncrement}>
        <PlusIcon />
      </Button>
    </Wrapper>
  );
};
