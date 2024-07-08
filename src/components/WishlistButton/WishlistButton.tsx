import { useState } from "react";

import { HeartFilledIcon, HeartIcon } from "assets/icons";
import { Button } from "components/FormElements";

import { IconButton } from "./styles";
import { useActions, useAppSelector } from "shared/store/hooks";

export const WishlistButton = ({ small, product, isMobileMenu, size }: WishlistButton) => {
  const { wishList } = useAppSelector((state) => state.wishlist);
  const inWishList = wishList.find((item) => item.id === product?.id);

  const { addItem, removeItem } = useActions();

  const addToWishListHandle = (product?: Model.Product) => {
    if (product) {
      inWishList ? removeItem(product.id) : addItem(product)
    }
  };

  return (
    <>
      {small ? (
        <IconButton onClick={() => addToWishListHandle(product)}> {inWishList ? <HeartFilledIcon /> : <HeartIcon />}</IconButton>
      ) : (
        <Button variant="outlined" size={size} fullWidth onClick={() => addToWishListHandle(product)}>
          {inWishList ? <HeartFilledIcon /> : <HeartIcon />} Wishlist{" "}
        </Button>
      )}
    </>
  );
};
