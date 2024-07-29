import { Box, List, ListItem } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { SearchIcon } from "assets/icons";
import { Input } from "components/FormElements";
import { useDebounce } from "hooks/useDebounce";
import { useOutsideClick } from "hooks/useOutsideClick";
import { useAppSelector } from "shared/store/hooks";

import { Button, Wrapper, ListLink } from "./styles";

export const SearchBlock = ({ isMobile }: { isMobile?: boolean }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Model.Product[]>([]);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const ref = useRef(null);
  useOutsideClick({ setClose: setIsSearchBarVisible, wrapperRef: ref });

  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (debouncedSearchQuery) {
      setFilteredProducts(
        products.filter((product) => product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())),
      );
    } else {
      setFilteredProducts([]);
    }
  }, [debouncedSearchQuery, products]);

  const toggleSearchBar = () => {
    setFilteredProducts([]);
    setSearchQuery("");
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const handleSearchInputChange: InputOnChange = ({ value }) => {
    setSearchQuery(String(value));
  };

  const classes = `${isSearchBarVisible ? "active" : ""} ${isMobile ? "mobile" : ""} `;
  return (
    <>
      <Wrapper ref={ref} className={classes}>
        <Box width="100%">
          <Input
            id={1}
            field="search"
            type="search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search"
          />
          {filteredProducts.length > 0 && (
            <List>
              {filteredProducts.map((product) => (
                <ListItem key={product.id}>
                  <ListLink to={`/product/${product.id}`} onClick={toggleSearchBar}>
                    {product.title}
                  </ListLink>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
        <Button onClick={toggleSearchBar}>
          <SearchIcon />
        </Button>
      </Wrapper>
    </>
  );
};
