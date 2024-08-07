import { useSearchParams } from "react-router-dom";

import { Select } from "components/FormElements";

import { Wrapper } from "./styles";

const generateCombinedValue = (searchParams: URLSearchParams, searchNames: string[]): string => {
  return searchNames
    .map((name) => searchParams.get(name) || "")
    .filter(Boolean)
    .join("-")
    .toString();
};

const updateSearchParams = (searchParams: URLSearchParams, searchNames: string[], paramValue: string): URLSearchParams => {
  searchNames.forEach((name) => {
    const values = paramValue.split("-");
    if (["sortBy", "order"].includes(name)) {
      searchParams.set("sortBy", values[0]);
      searchParams.set("order", values[1]);
    } else {
      searchParams.set(name, paramValue);
    }
  });
  return searchParams;
};

export const Sort = ({ options, placeholder, bordered, searchNames }: Sort) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const combinedValue = generateCombinedValue(searchParams, searchNames);

  const desiredOption = options.find(({ value }) => value === combinedValue);

  const changeValue: InputOnChange = ({ value }) => {
    const paramValue = JSON.parse(value as string).value;
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      return updateSearchParams(newSearchParams, searchNames, paramValue);
    });
  };

  return (
    <Wrapper className={bordered ? "bordered" : ""}>
      <Select
        placeholder={placeholder}
        options={options}
        onChange={changeValue}
        id={1}
        value={desiredOption?.name || ""}
        field={searchNames[0]}
        replaceName
      />
    </Wrapper>
  );
};
