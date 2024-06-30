import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductContent } from "components/ProductContent";
import { ProductSlider } from "components/ProductSlider";
import { ProductWrapper } from "components/Wrappers/ProductWrapper";
import { useGetProductQuery } from "shared/store/queries/product.query";

const Product = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetProductQuery(Number(id));

  if (isLoading) return <p>Loading...</p>;
  console.log(data);
  const product = data as Model.Product;
  return (
    <ProductWrapper>
      <Breadcrumbs />
      <Box display="flex" gap={3}>
        <ProductSlider images={product.images} discountPercentage={product.discountPercentage} />
        <ProductContent {...product} />
      </Box>
    </ProductWrapper>
  );
};

export default Product;
