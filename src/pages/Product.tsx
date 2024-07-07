import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductContent } from "components/ProductContent";
import { ProductSlider } from "components/ProductSlider";
import { ProductWrapper } from "components/Wrappers/ProductWrapper";
import { ProductTabs } from "components/ProductTabs";
import { useGetProductQuery } from "shared/store/queries/product.query";

const Product = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetProductQuery(Number(id));

  if (isLoading) return <p>Loading...</p>;

  const product = data as Model.Product;
  return (
    <ProductWrapper>
      <Breadcrumbs title={product.title} />
      <Box display="flex" gap={3}>
        <ProductSlider images={product.images} discountPercentage={product.discountPercentage} />
        <ProductContent {...product} />
      </Box>
      <ProductTabs {...product} />
    </ProductWrapper>
  );
};

export default Product;
