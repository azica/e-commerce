import { Box } from "@mui/material";
import { useState } from "react";

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

import { Content, Inner, Toolbar } from "./styles";
import { useAppSelector } from "shared/store/hooks";

export const Shop = () => {
  const { gridLayout } = useAppSelector(state => state.product);

  return (
    <Box>
      <PageHeader
        backgroundImage={shopBg}
        title="Shop Page"
        subtitle="Let’s design the place you always imagined."
        breadcrumbs={<Breadcrumbs center />}
      />
      <Container>
        <Inner className={gridLayout}>
          <SideBar />
          <Toolbar className={gridLayout}>
            {gridLayout === "grid1" ? <FilterTitle /> : null}
            <Sort options={sortOptions} placeholder="SortBy" searchNames={["sortBy", "order"]} />
            <GridFilters />
          </Toolbar>
          <Content>
            <ProductsGrid />
          </Content>
        </Inner>
      </Container>
    </Box>
  );
};
