import { useLocation } from "react-router-dom";

import { SideMenuLink } from "./SideMenuLink";
import { Wrapper } from "./styles";
import { useGetCategoriesQuery } from "shared/store/queries/product.query";

export const SideMenu = () => {
  const { search } = useLocation();
  const { data, isSuccess, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <Wrapper>
      {(data as string[])?.map((item) => (
        <SideMenuLink key={item} url={`/shop?category=${item}`} active={search === `?category=${item}`} title={item} />
      ))}
    </Wrapper>
  );
};
