import { useState } from "react";

import { Grid1Icon, Grid2Icon, Grid3Icon, Grid4Icon } from "assets/icons";

import { Wrapper, Button } from "./styles";

export const GridFilters = ({
  gridLayout,
  setGridLayout,
}: {
  gridLayout: string;
  setGridLayout: (val: string) => void;
}) => {
  const clickHandle = (grid: string) => {
    setGridLayout(grid);
  };

  const gridButtons = [
    { icon: <Grid1Icon />, handle: () => clickHandle("grid1"), name: "grid1" },
    { icon: <Grid2Icon />, handle: () => clickHandle("grid2"), name: "grid2" },
    { icon: <Grid3Icon />, handle: () => clickHandle("grid3"), name: "grid3" },
    { icon: <Grid4Icon />, handle: () => clickHandle("grid4"), name: "grid4" },
  ];

  return (
    <Wrapper>
      {gridButtons.map((el, index) => (
        <Button key={index} onClick={el.handle} className={gridLayout === el.name ? "active" : ""}>
          {el.icon}
        </Button>
      ))}
    </Wrapper>
  );
};
