import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Checkbox } from "components/FormElements/Checkbox";
import { FormGroup, FormControl } from "./styles";
import { getCurrentParams } from "shared/helpers/utils";

export const CheckboxList: CheckboxList = ({ list, searchParamName }) => {
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

    console.log(newString)
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
    <FormControl
      // @ts-ignore
      component="fieldset"
      variant="outlined"
    >
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
