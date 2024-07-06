import { useSearchParams } from "react-router-dom";

import { Select } from "components/FormElements";

import { Wrapper } from "./styles";

export const Sort = ({ options, placeholder }: { options: Option[]; placeholder: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy"),
    order = searchParams.get("order");

  const desiredOption = options.find(({ value }) => value === `${sortBy}-${order}`);
  const defaultValue = desiredOption ? desiredOption.name : '';

  const changeValue: InputOnChange = ({ value }) => {
    const param = JSON.parse(`${value}`).value;
    const [sortBy, order] = param.split("-");

    setSearchParams((searchParams) => {
      searchParams.set("sortBy", sortBy);
      searchParams.set("order", order);
      return searchParams;
    });
  };

  return (
    <Wrapper>
      <Select placeholder={placeholder} options={options} onChange={changeValue} id={1} value={defaultValue} field={"sortBy"} replaceName />
    </Wrapper>
  );
};
