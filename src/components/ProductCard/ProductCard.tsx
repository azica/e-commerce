import { useState } from "react";
import { Link } from "react-router-dom";

import { HeartFilledIcon, HeartIcon } from "assets/icons";
import { AddToCart } from "components/AddToCart";
import { Badge } from "components/Badge";
import { Rating } from "components/Rating";
import { WishlistButton } from "components/WishlistButton";

import { Wrapper, Image, Badges, WishlistButtonWrap, Content, Title, Price, AddToCartButton } from "./styles";

export const ProductCard = ({ product }: { product: Model.Product }) => {
  const discountedPrice = product.discountPercentage ? product.price * (1 - product.discountPercentage / 100) : null;

  return (
    <Wrapper>
      <Image>
        <img src={product.thumbnail} alt={product.title} />
        <Badges>
          <Badge size="medium">New</Badge>
          {product.discountPercentage ? (
            <Badge greenBg={true} size="medium">
              -{product.discountPercentage.toFixed(0)}%
            </Badge>
          ) : null}
        </Badges>
        <WishlistButtonWrap className="wishlist">
          <WishlistButton product={product} small />
        </WishlistButtonWrap>
        <AddToCartButton className="addToCart">
          <AddToCart product={product} size="medium" />
        </AddToCartButton>
      </Image>
      <Content>
        <Rating stars={product.rating} />
        <Title variant="body2">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </Title>
        <Price>
          <span>$ {product.price}</span>
          {discountedPrice ? <span className="oldPrice">$ {discountedPrice.toFixed(2)}</span> : null}
        </Price>
      </Content>
    </Wrapper>
  );
};
