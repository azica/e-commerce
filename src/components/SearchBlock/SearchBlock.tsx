import { useState } from "react";

import { SearchIcon } from "assets/icons";
import { Button } from "./styles";

export const SearchBlock = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const searchHandle = () => {
        setShowSearchBar(!showSearchBar);
    };
    return (
        <Button onClick={searchHandle}>
            <SearchIcon />
        </Button>
    );
};
