import { useState } from "react";

import { Checkbox } from "components/FormElements/Checkbox";

import { FormGroup, FormControl } from "./styles";

const getCurrentParams = (searchParams: string | null, arr: CheckboxListItem[]): CheckboxListItem[] => {
  if (searchParams) {
    const currentParams = searchParams.split("");
    return arr.map((el) => (currentParams.includes(el.value.toString()) ? { ...el, checked: true } : el));
  }
  return arr;
};

export const CheckboxList: CheckboxList = ({ list, searchParamName }) => {
  const [listProps, setListProps] = useState<CheckboxListItem[]>(() => getCurrentParams(searchParamName, list));

  const valueChange: CheckboxOnChange = (newVal: { field: string; value: boolean }) => {
    setListProps(listProps.map((item) => (newVal.field === `${item.id}` ? { ...item, checked: newVal.value } : item)));
  };

  return (
    <FormControl
      // @ts-ignore
      component="fieldset"
      variant="outlined">
      <FormGroup>
        {listProps.map(({ id, checked, label, disabled, value }) => (
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
