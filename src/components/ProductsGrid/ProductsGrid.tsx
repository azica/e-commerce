import { ProductCard } from "components/ProductCard";
import { ProductCardSkeleton } from "components/ProductCardSkeleton";

import { Grid } from "./styles";

export const ProductsGrid = ({
  products = [],
  isLoading,
}: {
  products?: Model.Product[];
  gridLayout: string;
  isLoading: boolean;
}) => {
  return (
    <Grid>
      {isLoading && products.length === 0
        ? Array.from({ length: 9 }).map((_, index) => <ProductCardSkeleton key={index} />)
        : products.map((product) => <ProductCard key={product.id} {...product} />)}
    </Grid>
  );
};
