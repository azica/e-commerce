import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Sort } from "components/Sort";
import { useGetCategoriesQuery } from "shared/store/queries/product.query";

import { SideMenuLink } from "./SideMenuLink";
import { Wrapper } from "./styles";

export const SideMenu = ({ gridLayout }: { gridLayout: string }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const { search } = useLocation();
  const { data, isSuccess, isLoading, error } = useGetCategoriesQuery();

  useEffect(() => {
    if (isSuccess && data) {
      const newOptions = (data as string[]).map((option) => {
        const newOptionName = option.split("-").join(" ");
        return { name: newOptionName, value: option };
      });
      setOptions(newOptions);
    }
  }, [isSuccess, data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <Wrapper className={gridLayout}>
      {gridLayout === "grid1" ? (
        (data as string[])?.map((item) => (
          <SideMenuLink key={item} url={`/shop?category=${item}`} active={search === `?category=${item}`} title={item} />
        ))
      ) : (
        <Sort options={options} placeholder="By Category" searchNames={["category"]} bordered />
      )}
    </Wrapper>
  );
};
