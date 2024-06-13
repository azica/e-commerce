import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "shared/store/queries/product.query";
import { Slider } from "components/Slider";
const Main = () => {
  const [sliderProducts, setSliderProducts] = useState<Model.Product[]>([]);

  const { data, isSuccess } = useGetProductsQuery();

  useEffect(() => {
    if (isSuccess && data) {
      setSliderProducts((data as Model.Product[]))
    }
  }, [data, isSuccess]);


  console.log(data);

  return (
    <Box>
      <Slider list={sliderProducts} />
    </Box>
  );
};

export default Main;
