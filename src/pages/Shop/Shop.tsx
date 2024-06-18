import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { sortOptions } from "assets/data/mockdata";
import shopBg from "assets/images/shopBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { GridFilters } from "components/GridFilters";
import { PageHeader } from "components/PageHeader";
import { ProductsGrid } from "components/ProductsGrid";
import { SideBar } from "components/SideBar";
import { Sort } from "components/Sort";
import { Container } from "components/Wrappers/Container";
import { useGetAllProductsQuery } from "shared/store/queries/product.query";

import { Content, Inner, Toolbar, ShowMoreButton } from "./styles";

export const Shop = () => {
  const [gridLayout, setGridLayout] = useState("grid1");
  const [filterTitle, setFilterTitle] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryString, setQueryString] = useState(searchParams.toString() || "");
  const { data, isLoading, isSuccess } = useGetAllProductsQuery(queryString);

  useEffect(() => {
    const paramsString = searchParams.toString();
    setQueryString(paramsString);

    setFilterTitle(searchParams.get("category") || "All Products");
  }, [searchParams]);

  const showMoreProducts = () => {
    // setSearchParams()
    console.log("aa");
  };

  return (
    <Box>
      <PageHeader
        bg={shopBg}
        title="Shop Page"
        subtitle="Let’s design the place you always imagined."
        breadcrumbs={<Breadcrumbs />}
      />
      <Container>
        <Inner>
          <SideBar />
          <Content>
            <Toolbar>
              <Typography variant="body1">{filterTitle}</Typography>
              <Sort options={sortOptions} placeholder="SortBy" />
              <GridFilters gridLayout={gridLayout} setGridLayout={setGridLayout} />
            </Toolbar>
            <ProductsGrid
              products={isSuccess && data ? (data as GetProducts).products : []}
              gridLayout={gridLayout}
              isLoading={isLoading}
            />
            <ShowMoreButton variant="outlined" size="small" onClick={showMoreProducts}>
              Show more
            </ShowMoreButton>
          </Content>
        </Inner>
      </Container>
    </Box>
  );
};
