import { useState } from "react";

import { CheckedIcon, HeartFilledIcon, HeartIcon } from "assets/icons";
import { Badge } from "components/Badge";
import { Button } from "components/FormElements";
import { Rating } from "components/Rating";
import { useActions } from "shared/store/hooks";

import { Wrapper, Image, Badges, AddToCart, Wishlist, Content, Title, Price } from "./styles";

export const ProductCard = ({ title, thumbnail, rating, price, discountPercentage, ...other }: Model.Product) => {
  const [added, setAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] = useState(true);

  const discountedPrice = discountPercentage ? price * (1 - discountPercentage / 100) : null;

  const { addToCart } = useActions();

  const addToCartHandle = (product: Model.Product) => {
    addToCart(product);
  };

  return (
    <Wrapper>
      <Image>
        <img src={thumbnail} alt={title} />
        <Badges>
          <Badge size="medium">New</Badge>
          {discountPercentage ? (
            <Badge greenBg={true} size="medium">
              -{discountPercentage.toFixed(0)}%
            </Badge>
          ) : null}
        </Badges>
        <Wishlist className="wishlist">{wishlistAdded ? <HeartFilledIcon /> : <HeartIcon />}</Wishlist>
        <AddToCart className="addToCart">
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={() => addToCartHandle({ title, thumbnail, rating, price, discountPercentage, ...other })}>
            {added ? (
              <>
                <CheckedIcon style={{ marginRight: "4px" }} /> Added
              </>
            ) : (
              "Add to cart"
            )}
          </Button>
        </AddToCart>
      </Image>
      <Content>
        <Rating stars={rating} />
        <Title variant="body2">{title}</Title>
        <Price>
          <span>$ {price}</span>
          {discountedPrice ? <span className="oldPrice">$ {discountedPrice.toFixed(2)}</span> : null}
        </Price>
      </Content>
    </Wrapper>
  );
};
