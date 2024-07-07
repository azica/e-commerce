import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { sortOptions } from "assets/data/mockdata";
import shopBg from "assets/images/shopBg.png";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FilterTitle } from "components/FilterTitle";
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
  const productsGridRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [queryString, setQueryString] = useState(searchParams.toString() || "");

  const { data, isLoading, isSuccess } = useGetAllProductsQuery(queryString);

  useEffect(() => {
    const paramsString = searchParams.toString();
    setQueryString(paramsString);
    setLimit(parseInt(searchParams.get("limit") || "10", 10));
    setSkip(parseInt(searchParams.get("skip") || "0", 10));
  }, [searchParams]);

  const showMoreProducts = () => {
    setSkip((prevSkip) => prevSkip + limit);
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("limit", limit.toString());
      newParams.set("skip", (skip + limit).toString());
      return newParams;
    });

    if (productsGridRef.current) {
      productsGridRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box>
      <PageHeader
        backgroundImage={shopBg}
        title="Shop Page"
        subtitle="Let’s design the place you always imagined."
        breadcrumbs={<Breadcrumbs center />}
      />
      <Container>
        <Inner ref={productsGridRef}>
          <SideBar />
          <Content>
            <Toolbar>
              <FilterTitle />
              <Sort options={sortOptions} placeholder="SortBy" />
              <GridFilters gridLayout={gridLayout} setGridLayout={setGridLayout} />
            </Toolbar>
            <ProductsGrid
              products={isSuccess && data ? (data as GetProducts).products : []}
              gridLayout={gridLayout}
              isLoading={isLoading}
            />
            {isSuccess && data && (data as GetProducts).total > 10 ? (
              <ShowMoreButton variant="outlined" size="small" onClick={showMoreProducts}>
                Show more
              </ShowMoreButton>
            ) : null}
          </Content>
        </Inner>
      </Container>
    </Box>
  );
};
