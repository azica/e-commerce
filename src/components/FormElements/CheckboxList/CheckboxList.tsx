import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Checkbox } from "components/FormElements/Checkbox";
import { Sort } from "components/Sort";
import { getCurrentParams } from "shared/helpers/utils";
import { useAppSelector } from "shared/store/hooks";

import { FormGroup, FormControl } from "./styles";

export const CheckboxList: CheckboxList = ({ list, searchParamName }) => {
  const { gridLayout } = useAppSelector((state) => state.product);
  const newOptions = list.map((option) => ({ name: String(option.label), value: option.value }));
  const [options, setOptions] = useState<Option[]>(newOptions);

  const [searchParams, setSearchParams] = useSearchParams();
  const [listProps, setListProps] = useState<CheckboxListItem[]>(getCurrentParams(searchParams, list));

  useEffect(() => {
    setListProps(getCurrentParams(searchParams, list));
  }, [searchParams, list]);

  const valueChange: CheckboxOnChange = (newVal) => {
    const newListProps = listProps.map((item) =>
      newVal.field === `${item.id}` ? { ...item, checked: newVal.value } : item,
    );
    setListProps(newListProps);

    const newString = newListProps
      .filter((el) => el.checked)
      .map((el) => el.value)
      .join("%");

    console.log(newString);
    setSearchParams((prevParams) => {
      // const newParams = new URLSearchParams(prevParams.toString());

      if (newString) {
        prevParams.set(searchParamName, newString);
      } else {
        prevParams.delete(searchParamName);
      }

      return prevParams;
    });
  };

  return (
    <>
      {gridLayout === "grid1" ? (
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
      ) : (
        <Sort options={options} placeholder="By Prices" searchNames={["prices"]} bordered />
      )}
    </>
  );
};
