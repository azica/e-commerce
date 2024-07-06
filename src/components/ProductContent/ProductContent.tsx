import { Box, Typography } from "@mui/material";

import { AddToCart } from "components/AddToCart";
import { CounterButtons } from "components/CounterButtons";
import { Rating } from "components/Rating";
import { Timer } from "components/Timer";
import { WishlistButton } from "components/WishlistButton";

import { PriceWrapper, Wrapper, Info, ProductList, Buttons } from "./styles";

export const ProductContent = (product: Model.Product) => {
  const discountedPrice = product.discountPercentage ? product.price * (1 - product.discountPercentage / 100) : null;

  return (
    <Wrapper>
      <Info>
        <Rating stars={product.rating} reviewsQuantity={product.reviews?.length} />
        <Typography variant="h4" color="primary.700">
          {product.title}
        </Typography>
        <Typography variant="body2" color="primary.400" fontFamily="fontFamily.interRegular">
          {product.description}
        </Typography>
        <PriceWrapper>
          <Typography variant="h6" color="black.900">
            ${product.price}
          </Typography>
          {discountedPrice ? (
            <Typography variant="heading7" color="primary.400">
              $ {discountedPrice.toFixed(2)}
            </Typography>
          ) : null}
        </PriceWrapper>
      </Info>

      <Timer endTime="August 4, 2024" />

      {product.dimensions ? (
        <Box>
          <Typography variant="body2" fontFamily="fontFamily.interSemiBold" color="primary.400">
            Measurements
          </Typography>
          <Typography variant="body1" fontFamily="fontFamily.interRegular" color="black.100">
            {product.dimensions.width} {product.dimensions.height} {product.dimensions.depth}
          </Typography>
        </Box>
      ) : null}
      <Buttons>
        <CounterButtons productId={product.id} isBig />
        <WishlistButton product={product} />
        <AddToCart product={product} size="large" />
      </Buttons>
      <ProductList>
        <li>
          <p>SKU</p>
          <span>{product.sku}</span>
        </li>
        <li>
          <p>Category</p>
          <span>{product.category}</span>
        </li>
      </ProductList>
    </Wrapper>
  );
};
