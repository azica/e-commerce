import { IconButton } from "@mui/material";
import { useState } from "react";

import { SearchIcon } from "assets/icons";
import { ProductCart } from "components/ProductCart";
import { ProfileMenu } from "components/ProfileMenu";

import { Wrapper } from "./styles";

export const HeaderActions = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const searchHandle = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <Wrapper>
      <IconButton onClick={searchHandle}>
        <SearchIcon />
      </IconButton>
      <ProfileMenu />
      <ProductCart />
    </Wrapper>
  );
};
