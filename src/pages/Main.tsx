import { Box } from "@mui/material";

import { Articles } from "components/Articles";
import { Banner } from "components/Banner";
import { BannerGrid } from "components/BannerGrid";
import { NewArrivals } from "components/NewArrivals";
import { Preloader } from "components/Preloader";
import { Slider } from "components/Slider";
import { Values } from "components/Values";
import { useGetProductsQuery } from "shared/store/queries/product.query";

const Main = () => {
  const { isLoading, error } = useGetProductsQuery();

  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <Box>
      <Preloader active={isLoading}>
        <Slider />
        <BannerGrid />
        <NewArrivals />
      </Preloader>
      <Values />
      <Banner />
      <Articles />
    </Box>
  );
};

export default Main;
