import { ProductCart } from "components/ProductCart";
import { ProfileMenu } from "components/ProfileMenu";
import { SearchBlock } from "components/SearchBlock";
import { useIsMobile } from "hooks/useMobile";

import { Wrapper } from "./styles";

export const HeaderActions = () => {
  const isMobile = useIsMobile(1020);

  return (
    <Wrapper>
      {isMobile ? null : (
        <>
          <SearchBlock />
          <ProfileMenu />
        </>
      )}
      <ProductCart />
    </Wrapper>
  );
};
