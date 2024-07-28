import React, { useEffect } from "react";

import { Grid1Icon, Grid2Icon, Grid3Icon, Grid4Icon } from "assets/icons";
import { useActions, useAppSelector } from "shared/store/hooks";

import { Wrapper, Button } from "./styles";

type GridLayout = "grid1" | "grid2" | "grid3" | "grid4";

export const GridFilters = () => {
  const { gridLayout, loading } = useAppSelector((state) => state.product);
  const { setGridLayout, setLoading } = useActions();

  useEffect(() => {
    if (gridLayout === "grid1") {
      if (!loading) {
        setLoading(true);
      }
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } else if (loading) {
      setLoading(false);
    }
  }, [gridLayout]);

  const gridChangeHandler = (layout: GridLayout) => {
    setGridLayout(layout);
  };

  const gridButtons = [
    { icon: <Grid1Icon />, layout: "grid1" as GridLayout },
    { icon: <Grid2Icon />, layout: "grid2" as GridLayout },
    { icon: <Grid3Icon />, layout: "grid3" as GridLayout },
    { icon: <Grid4Icon />, layout: "grid4" as GridLayout },
  ];

  return (
    <Wrapper>
      {gridButtons.map((button) => (
        <Button
          key={button.layout}
          onClick={() => gridChangeHandler(button.layout)}
          className={gridLayout === button.layout ? "active" : ""}
          disabled={loading}>
          {button.icon}
        </Button>
      ))}
    </Wrapper>
  );
};
