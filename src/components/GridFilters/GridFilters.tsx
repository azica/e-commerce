import { Grid1Icon, Grid2Icon, Grid3Icon, Grid4Icon } from "assets/icons";
import { Wrapper, Button } from "./styles";
import { useActions, useAppSelector } from "shared/store/hooks";
import { memo, useEffect } from "react";

export const GridFilters = memo(() => {
  const { gridLayout, loading } = useAppSelector(state => state.product);
  const { setGridLayout, setLoading } = useActions();

  useEffect(() => {
    if (gridLayout === "grid1") {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }

  }, [gridLayout]);

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
        <Button key={index} onClick={el.handle} className={gridLayout === el.name ? "active" : ""} disabled={loading}>
          {el.icon}
        </Button>
      ))}
    </Wrapper>
  );
});
