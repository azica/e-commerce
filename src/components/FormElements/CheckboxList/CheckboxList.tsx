import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Checkbox } from "components/FormElements/Checkbox";

import { FormGroup, FormControl } from "./styles";

const getQueryString = (arr: CheckboxListItem[]): string => {
  return arr
    .filter((item) => item.checked)
    .map((item) => item.value)
    .join(",");
};

const getCurrentParams = (searchParams: string | null, arr: CheckboxListItem[]): CheckboxListItem[] => {
  if (searchParams) {
    const currentParams = searchParams.split("");
    return arr.map((el) => (currentParams.includes(el.value.toString()) ? { ...el, checked: true } : el));
  }
  return arr;
};

export const CheckboxList: CheckboxList = ({ list, searchParamName }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [listProps, setListProps] = useState<CheckboxListItem[]>(() => getCurrentParams(searchParamName, list));

  // useEffect(() => {
  //   setSearchParams((prevSearchParams) => {
  //     const newSearchParams = new URLSearchParams(prevSearchParams);
  //     newSearchParams.set(searchParamName, getQueryString(listProps));
  //     return newSearchParams;
  //   });
  // }, []);

  const valueChange: CheckboxOnChange = (newVal: { field: string; value: boolean }) => {
    setListProps(listProps.map((item) => (newVal.field === `${item.id}` ? { ...item, checked: newVal.value } : item)));
  };

  return (
    <FormControl
      // @ts-ignore
      component="fieldset"
      variant="outlined">
      <FormGroup>
        {listProps.map(({ id, checked, label, disabled, value, ...other }) => (
          <Checkbox
            key={id}
            id={id}
            onChange={valueChange}
            checked={checked ? checked : false}
            className={checked ? "checked" : ""}
            disabled={disabled}
            field={`${id}`}
            label={label}
            value={value}
            labelPlacement="start"
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};
