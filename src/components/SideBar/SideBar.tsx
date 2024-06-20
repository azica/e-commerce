import { Box, Typography } from "@mui/material";

import { prices } from "assets/data/mockdata";
import { FilterIcon } from "assets/icons";
import { CheckboxList } from "components/FormElements/CheckboxList";
import { SideMenu } from "components/SideMenu";
import { useGetCategoriesQuery } from "shared/store/queries/product.query";

import { Title, Wrapper, Filter } from "./style";

export const SideBar = () => {
  const { data, isSuccess, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <Wrapper>
      <Filter>
        <FilterIcon />
        <Typography variant="body1">Filter</Typography>
      </Filter>
      <Box>
        <Title variant="body2">CATEGORIES</Title>
        {isSuccess && data ? <SideMenu list={data as string[]} /> : null}
      </Box>
      <Box>
        <Title variant="body2">PRICE</Title>
        <CheckboxList list={prices} searchParamName="prices" />
      </Box>
    </Wrapper>
  );
};

export default SideBar;
