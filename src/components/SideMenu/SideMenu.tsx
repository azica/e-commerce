import { useLocation } from "react-router-dom";

import { SideMenuLink } from "./SideMenuLink";
import { Wrapper } from "./styles";

export const SideMenu = ({ list }: { list: string[] }) => {
  const { search } = useLocation();

  return (
    <Wrapper>
      {list.map((item, index) => (
        <SideMenuLink key={index + item} url={`/shop?filter=${item}`} active={search === `?filter=${item}`} title={item} />
      ))}
    </Wrapper>
  );
};
