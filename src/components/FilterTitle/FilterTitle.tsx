import { Typography } from "@mui/material";
import { useEffect, useState, useRef, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const FilteredTitle = () => {
  const [searchParams] = useSearchParams();
  const [filterTitle, setFilterTitle] = useState<string>("");
  const outletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchParams) {
      const categoryParam = searchParams.get("category") || "All Products";
      setFilterTitle(categoryParam);
    }
  }, [searchParams]);

  return (
    <SwitchTransition>
      <CSSTransition key={filterTitle} classNames="fade" timeout={250} nodeRef={outletRef}>
        <Typography ref={outletRef} color="black.100" fontFamily="fontFamily.interSemiBold">
          {filterTitle.split("-").join(" ")}
        </Typography>
      </CSSTransition>
    </SwitchTransition>
  );
};

export const FilterTitle = memo(FilteredTitle);
