import { useLocation } from "react-router-dom";

import { SideMenuLink } from "./SideMenuLink";
import { Wrapper } from "./styles";
import { useGetCategoriesQuery } from "shared/store/queries/product.query";
import { Sort } from "components/Sort";
import { useEffect, useState } from "react";

export const SideMenu = ({ gridLayout }: { gridLayout: string }) => {

  const [options, setOptions] = useState<Option[]>([]);
  const { search } = useLocation();
  const { data, isSuccess, isLoading, error } = useGetCategoriesQuery();

  useEffect(() => {
    if (isSuccess && data) {
      const newOptions = (data as string[]).map((option) => {
        let newOptionName = option.split("-").join(" ");
        return { name: newOptionName, value: option }
      })
      setOptions(newOptions)
    }
  }, [isSuccess, data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <Wrapper className={gridLayout}>
      {gridLayout === "grid1" ?
        (data as string[])?.map((item) => (
          <SideMenuLink key={item} url={`/shop?category=${item}`} active={search === `?category=${item}`} title={item} />
        ))
        :
        <Sort bordered options={options} placeholder="By Category" searchNames={["category"]} />
      }

    </Wrapper>
  );
};
