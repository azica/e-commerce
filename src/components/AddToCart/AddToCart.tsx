import { useSnackbar } from "notistack";
import { useCallback } from "react";

import { CheckedIcon } from "assets/icons";
import { Button } from "components/FormElements";
import { useActions, useAppSelector } from "shared/store/hooks";

interface AddToCartProps {
  product: Model.Product;
  size?: Size;
  className?: string;
}

export const AddToCart = ({ product, size, className }: AddToCartProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { cartList } = useAppSelector((state) => state.cart);
  const { addToCart } = useActions();

  const isInCart = cartList.some((item) => item.id === product.id);

  const addToCartHandle = useCallback(() => {
    if (!isInCart) {
      addToCart(product as Model.CartItem);
    }

    enqueueSnackbar(`${product.title} ${isInCart ? "already in the cart" : "added to cart successfully!"}`, {
      variant: isInCart ? "info" : "success",
      autoHideDuration: 2000,
    });
  }, [isInCart, addToCart, enqueueSnackbar, product]);

  return (
    <Button variant="contained" size={size} fullWidth onClick={addToCartHandle} className={className}>
      {isInCart ? (
        <>
          <CheckedIcon /> Added
        </>
      ) : (
        "Add to cart"
      )}
    </Button>
  );
};
