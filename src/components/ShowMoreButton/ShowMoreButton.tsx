import type { RefObject } from "react";

import { useSearchParams } from "react-router-dom";

import { ButtonWrap } from "./styles";

export const ShowMoreButton = ({
  totalProducts,
  productsGridRef,
}: {
  totalProducts: number;
  productsGridRef: RefObject<HTMLDivElement>;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const skip = parseInt(searchParams.get("skip") || "0", 10);
  let limit = parseInt(searchParams.get("limit") || "10", 10);

  const showMoreProducts = () => {
    limit += 10;

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("skip", skip.toString());
      newParams.set("limit", limit.toString());
      return newParams;
    });

    if (productsGridRef.current) {
      const lastProduct = productsGridRef.current.lastElementChild as HTMLElement;
      if (lastProduct) {
        lastProduct.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  };

  const hasMoreProducts = totalProducts > skip + limit;

  return (
    <ButtonWrap variant="outlined" size="small" onClick={showMoreProducts} disabled={!hasMoreProducts}>
      Show more
    </ButtonWrap>
  );
};
