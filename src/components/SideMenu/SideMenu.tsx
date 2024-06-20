import { useLocation } from "react-router-dom";

import { SideMenuLink } from "./SideMenuLink";
import { Wrapper } from "./styles";

export const SideMenu = ({ list }: { list: string[] }) => {
  const { search } = useLocation();

  return (
    <Wrapper>
      {list.map((item) => (
        <SideMenuLink key={item} url={`/shop?category=${item}`} active={search === `?category=${item}`} title={item} />
      ))}
    </Wrapper>
  );
};
