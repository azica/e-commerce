import { Box } from "@mui/material";

import { Articles } from "components/Articles";
import { Banner } from "components/Banner";
import { NewArrivals } from "components/NewArrivals";
import { Slider } from "components/Slider";
import { Values } from "components/Values";
import { useGetProductsQuery } from "shared/store/queries/product.query";

const Main = () => {
  const { isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <Box>
      <Slider />
      <NewArrivals />
      <Values />
      <Banner />
      <Articles />
    </Box>
  );
};

export default Main;
