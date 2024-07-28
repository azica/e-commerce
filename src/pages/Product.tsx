import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Breadcrumbs } from "components/Breadcrumbs";
import { Preloader } from "components/Preloader";
import { ProductContent } from "components/ProductContent";
import { ProductSlider } from "components/ProductSlider";
import { ProductTabs } from "components/ProductTabs";
import { ProductWrapper } from "components/Wrappers/ProductWrapper";
import { useGetProductQuery } from "shared/store/queries/product.query";

const Product = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useGetProductQuery(Number(id));

  const product = data as Model.Product;

  return (
    <Preloader active={isLoading}>
      {isSuccess && product ? (
        <ProductWrapper>
          <Breadcrumbs title={product.title} />
          <Box display="flex" gap={3}>
            <ProductSlider images={product.images} discountPercentage={product.discountPercentage} />
            <ProductContent {...product} />
          </Box>
          <ProductTabs {...product} />
        </ProductWrapper>
      ) : null}
    </Preloader>
  );
};

export default Product;
