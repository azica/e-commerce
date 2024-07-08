import { ProductCard } from "components/ProductCard";
import { Box, CircularProgress } from "@mui/material";
import { useGetAllProductsQuery } from "shared/store/queries/product.query";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import { Grid } from "./styles";
import { ShowMoreButton } from "components/ShowMoreButton";
import { useAppSelector } from "shared/store/hooks";

export const ProductsGrid = () => {
  const [searchParams] = useSearchParams();
  const productsGridRef = useRef<HTMLDivElement>(null);
  const { gridLayout } = useAppSelector(state => state.product);

  const { data, isLoading, isSuccess } = useGetAllProductsQuery(searchParams.toString() || "");
  const products = (data as GetProducts)?.products || [];
  const totalProducts = (data as GetProducts)?.total || 0;

  if (isLoading) {
    return (
      <Box width="100%" height="300px" display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box ref={productsGridRef}>
      <Grid className={gridLayout}>
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </Grid>

      {isSuccess && totalProducts > 10 && (
        <ShowMoreButton totalProducts={totalProducts} productsGridRef={productsGridRef} />
      )}
    </Box>
  );
};
