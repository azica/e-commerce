import { useState } from "react";

import { useDebounce } from "hooks/useDebounce";
import { SearchIcon } from "assets/icons";
import { Button, Wrapper } from "./styles";
import { Input } from "components/FormElements";

export const SearchBlock = ({ isMobile }: { isMobile?: boolean }) => {
    const [value, setValue] = useState<string>("");
    const [showSearchBar, setShowSearchBar] = useState(false);
    const debouncedValue = useDebounce(value, 500);

    const searchHandle = () => {
        setShowSearchBar(!showSearchBar);
    };

    const changeValue: InputOnChange = ({ field: name, value, id }) => {
        setValue(String(value));
    };

    return (
        <>
            {isMobile ? (
                <Wrapper>
                    <Input
                        id={0}
                        field="search"
                        type="search"
                        value={value}
                        onChange={changeValue}
                        startAdornment={<SearchIcon />}
                        placeholder="Search" />
                </Wrapper>
            ) : (
                <Button onClick={searchHandle}>
                    <SearchIcon />
                </Button>
            )}
        </>
    );
};
