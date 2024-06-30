import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const FilterTitle = () => {
  const [filterTitle, setFilterTitle] = useState<string>("");
  const [searchParams] = useSearchParams();
  const outletRef = useRef(null);
  const { search } = useLocation();

  useEffect(() => {
    setFilterTitle(searchParams.get("category") || "All Products");
  }, [searchParams]);
  console.log(search);

  return (
    <SwitchTransition>
      <CSSTransition key={search} classNames={"fadeIn"} timeout={900} nodeRef={outletRef} unmountOnExit>
        <Typography ref={outletRef} color="black.100" fontFamily="fontFamily.interSemiBold">
          {filterTitle}
        </Typography>
      </CSSTransition>
    </SwitchTransition>
  );
};
