import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HeartFilledIcon, HeartIcon } from "assets/icons";
import { AddToCart } from "components/AddToCart";
import { Badge } from "components/Badge";
import { Rating } from "components/Rating";
import { WishlistButton } from "components/WishlistButton";

import { Wrapper, Image, Badges, WishlistButtonWrap, Content, Title, Price, AddToCartButton, Description } from "./styles";
import { useAppSelector } from "shared/store/hooks";

export const ProductCard = ({ product }: { product: Model.Product }) => {
  const { pathname } = useLocation();
  const { gridLayout } = useAppSelector(state => state.product);
  const discountedPrice = product.discountPercentage ? product.price * (1 - product.discountPercentage / 100) : null;

  const isRow = gridLayout === "grid3" || gridLayout === "grid4" && pathname === "/shop";
  return (
    <Wrapper className={isRow ? "row" : ""}>
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
      <Content className="content">
        <Rating stars={product.rating} />
        <Title variant="body2">
          <Link
            to={`/product/${product.id}`} onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }>{product.title}</Link>
        </Title>
        <Price>
          <span>$ {product.price}</span>
          {discountedPrice ? <span className="oldPrice">$ {discountedPrice.toFixed(2)}</span> : null}
        </Price>
        {
          isRow ?
            <Description variant="body2" fontFamily="fontFamily.interRegular" color="primary.400">
              {product.description}
            </Description>
            : null
        }
      </Content>
    </Wrapper>
  );
};
