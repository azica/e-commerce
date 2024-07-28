import { useSnackbar } from "notistack";
import { useCallback } from "react";

import { HeartFilledIcon, HeartIcon } from "assets/icons";
import { Button } from "components/FormElements";
import { useActions, useAppSelector } from "shared/store/hooks";

import { IconButton } from "./styles";

export const WishlistButton = ({ small, product, size }: WishlistButtonProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { wishList } = useAppSelector((state) => state.wishlist);
  const inWishList = wishList.some((item) => item.id === product?.id);

  const { addItem, removeItem } = useActions();

  const addToWishListHandle = useCallback(() => {
    if (inWishList) {
      removeItem(product.id);
      enqueueSnackbar(`${product.title} removed from wishlist successfully!`, {
        variant: "info",
        autoHideDuration: 2000,
      });
    } else {
      addItem(product);
      enqueueSnackbar(`${product.title} added to wishlist successfully!`, {
        variant: "success",
        autoHideDuration: 2000,
      });
    }
  }, [inWishList, product, addItem, removeItem, enqueueSnackbar]);

  return small ? (
    <IconButton onClick={addToWishListHandle}>{inWishList ? <HeartFilledIcon /> : <HeartIcon />}</IconButton>
  ) : (
    <Button variant="outlined" size={size} fullWidth onClick={addToWishListHandle}>
      {inWishList ? <HeartFilledIcon /> : <HeartIcon />} Wishlist
    </Button>
  );
};
