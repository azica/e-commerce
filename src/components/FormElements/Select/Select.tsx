import type { SelectChangeEvent } from "@mui/material/Select";

import { Select as SelectMUI, FormControl, OutlinedInput, FormHelperText, InputLabel, Chip } from "@mui/material";
import { useState, useEffect, useRef } from "react";

import { ArrowDownIcon } from "assets/icons";

import { Placeholder, MenuItem, Text, ChipList, ChipItem } from "./styles";

export const Select = ({
  options,
  id,
  field,
  placeholder,
  label,
  value,
  required,
  invalid,
  helperText,
  onChange,
  startAdornment,
  replaceName,
  multiple,
  className,
}: Select) => {
  // @ts-ignore
  const [selected, setSelected] = useState<string | string[]>(value);
  const selectWrapper = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const idForInput = `${field}-${id}`;
  const idForLabel = `${idForInput}-label`;

  useEffect(() => {
    // @ts-ignore
    setWrapperWidth(selectWrapper.current.offsetWidth);
  }, []);

  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const { target } = event;
    const { value } = target;

    if (replaceName && !multiple) {
      // @ts-ignore
      const data = JSON.parse(value);
      setSelected(data.name);
    } else {
      setSelected(value);
    }
    onChange({ value, field, id: idForInput });
  };

  return (
    <FormControl className={`"common-input" ${className}`} required={required} error={invalid} ref={selectWrapper}>
      {label ? (
        <InputLabel id={idForLabel} required={required}>
          {label}
        </InputLabel>
      ) : null}

      <SelectMUI
        id={idForInput}
        value={selected}
        onChange={handleChange}
        label={label}
        labelId={idForLabel}
        input={<OutlinedInput style={{ width: wrapperWidth }} name={field} startAdornment={startAdornment} />}
        IconComponent={ArrowDownIcon}
        MenuProps={{
          style: { width: wrapperWidth, maxHeight: 500 },
          PaperProps: {
            className: "select",
          },
          disableScrollLock: true,
        }}
        multiple={multiple}
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0 || selected === "") {
            return <Placeholder>{placeholder}</Placeholder>;
          }
          if (multiple) {
            return (
              <ChipList>
                {/* @ts-ignore */}
                {selected.map((value) => {
                  const data = replaceName ? JSON.parse(value) : null;
                  return (
                    <ChipItem key={value}>
                      <Chip label={data ? data.name : value} />
                    </ChipItem>
                  );
                })}
              </ChipList>
            );
          } else {
            return selected;
          }
        }}>
        {options &&
          options.map(({ name, value }) => (
            <MenuItem key={value} value={replaceName ? JSON.stringify({ name, value }) : value} autoFocus={false}>
              <Text title={name}>{name}</Text>
            </MenuItem>
          ))}
      </SelectMUI>
      <FormHelperText title={helperText}>{helperText}</FormHelperText>
    </FormControl>
  );
};
