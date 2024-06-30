import { useState } from "react";

import { HeartFilledIcon, HeartIcon } from "assets/icons";
import { Button } from "components/FormElements";

import { IconButton } from "./styles";

export const WishlistButton = ({ small, product }: { small?: boolean; product: Model.Product }) => {
  const [wishlistAdded] = useState(false);
  return (
    <>
      {small ? (
        <IconButton> {wishlistAdded ? <HeartFilledIcon /> : <HeartIcon />}</IconButton>
      ) : (
        <Button variant="outlined" size="large" fullWidth>
          {wishlistAdded ? <HeartFilledIcon /> : <HeartIcon />} Wishlist{" "}
        </Button>
      )}
    </>
  );
};
