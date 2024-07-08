import { Link, useLocation } from "react-router-dom";

import { AddToCart } from "components/AddToCart";
import { Badge } from "components/Badge";
import { Rating } from "components/Rating";
import { WishlistButton } from "components/WishlistButton";
import { Preloader } from "components/Preloader";
import { useAppSelector } from "shared/store/hooks";

import { Wrapper, Image, Badges, WishlistButtonWrap, Content, Title, Price, AddToCartButton, Description } from "./styles";

export const ProductCard = ({ product, loading }: { product: Model.Product; loading: boolean }) => {
  const { pathname } = useLocation();
  const { gridLayout } = useAppSelector(state => state.product);
  const discountedPrice = product.discountPercentage ? product.price * (1 - product.discountPercentage / 100) : null;

  const isRow = gridLayout === "grid3" || gridLayout === "grid4" && pathname === "/shop";
  return (
    <Wrapper className={isRow ? "row" : ""}>
      <Image>
        <Preloader active={loading}>
          <img src={product.thumbnail} alt={product.title} />
        </Preloader>
        <Badges>
          <Badge size="medium">New</Badge>
          {product.discountPercentage ? (
            <Badge greenBg={true} size="medium">
              -{product.discountPercentage.toFixed(0)}%
            </Badge>
          ) : null}
        </Badges>
        {
          isRow ? null
            : <>
              <WishlistButtonWrap className="wishlist">
                <WishlistButton product={product} small size="medium" />
              </WishlistButtonWrap>
              <AddToCartButton className="addToCart">
                <AddToCart product={product} size="medium" />
              </AddToCartButton>
            </>
        }
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
            <>
              <Description variant="body2" fontFamily="fontFamily.interRegular" color="primary.400">
                {product.description}
              </Description>
              <AddToCart product={product} size="medium" className="button" />
              <WishlistButton product={product} size="medium" />
            </>
            : null
        }
      </Content>
    </Wrapper>
  );
};
