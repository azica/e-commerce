import { Masonry } from "@mui/lab";
import { Typography } from "@mui/material";

import { Link } from "components/Link";
import { Preloader } from "components/Preloader";
import { Container } from "components/Wrappers/Container";
import { useIsMobile } from "hooks/useMobile";
import { useGetAllProductsQuery } from "shared/store/queries/product.query";

import { Titles, ImageWrap } from "./styles";

const getUniqueCategoryProducts = (products?: Model.Product[]): Model.Product[] => {
  if (!products) {
    return [];
  }

  const seenCategories = new Set();

  return products.filter((product) => {
    if (!seenCategories.has(product.category)) {
      seenCategories.add(product.category);
      return true;
    }
    return false;
  });
};

export const BannerGrid = () => {
  const { data, isLoading } = useGetAllProductsQuery("limit=100");
  const isTablet = useIsMobile(720);
  const isMobile = useIsMobile(420);

  const getRandomHeight = () => Math.floor(Math.random() * (450 - 200 + 1)) + 200;

  return (
    <Container>
      <Titles>
        <Typography variant="h1" color="primary.700">
          Simply Unique<span>/</span> Simply Better.
        </Typography>
        <Typography variant="body2" color="primary.400">
          <span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </Typography>
      </Titles>
      <Preloader active={isLoading}>
        <Masonry columns={isMobile ? 1 : isTablet ? 2 : 3} spacing={2}>
          {getUniqueCategoryProducts((data as GetProducts)?.products).map((product) => (
            <ImageWrap key={product.id} height={getRandomHeight()}>
              <Typography variant="h5" color="primary.700">
                {product.category}
              </Typography>
              <Link linkLabel="Shop Now" link={`/shop?category=${product.category}`} />
              <img src={product.images[0]} alt={product.title} />
            </ImageWrap>
          ))}
        </Masonry>
      </Preloader>
    </Container>
  );
};
