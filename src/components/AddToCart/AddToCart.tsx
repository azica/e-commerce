import { CheckedIcon } from "assets/icons";
import { Button } from "components/FormElements";
import { useActions, useAppSelector } from "shared/store/hooks";

export const AddToCart = ({ product, size, className }: { product: Model.Product; size?: Size; className?: string }) => {
  const { cartList } = useAppSelector((state) => state.cart);
  const isInCart = cartList.some((item) => item.id === product.id);

  const { addToCart } = useActions();

  const addToCartHandle = (product: Model.Product) => {
    addToCart(product as Model.CartItem);
  };

  return (
    <Button
      variant="contained"
      size={size}
      fullWidth
      onClick={() => addToCartHandle(product)}
      className={className}
    >
      {isInCart ? (
        <>
          <CheckedIcon style={{ marginRight: "4px" }} /> Added
        </>
      ) : (
        "Add to cart"
      )}
    </Button>
  );
};
