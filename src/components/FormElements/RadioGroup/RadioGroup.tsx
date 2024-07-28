import type { ChangeEvent } from "react";

import { useState, useEffect } from "react";

import { RadioGroupMui, Radio, FormControl, RadioContainer, RadioMark, FormControlLabel, RadioWrap } from "./styles";

export const RadioGroup = ({ list, field, id, onChange, defaultValue, bordered }: RadioGroupProps) => {
  const [value, setValue] = useState<string | number>(defaultValue ? defaultValue : list[0].value);
  const idForInput = `${field}-${id}`;

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
    onChange({ value: target.value, field, id: idForInput });
  };

  return (
    <FormControl>
      <RadioGroupMui value={value} onChange={changeValue} className={bordered ? "bordered" : "select-container"}>
        {list.map(({ id, value: itemValue, name, afterRadioLabel }) => {
          const isActive = value === itemValue;
          return (
            <RadioWrap key={`${id}`} className={`${bordered ? "bordered" : ""} ${isActive ? "active" : ""}`}>
              <FormControlLabel
                id={idForInput}
                value={itemValue ? itemValue : id}
                control={
                  <Radio
                    icon={<RadioContainer />}
                    checkedIcon={
                      <RadioContainer>
                        <RadioMark />
                      </RadioContainer>
                    }
                  />
                }
                label={name}
              />
              {afterRadioLabel}
            </RadioWrap>
          );
        })}
      </RadioGroupMui>
    </FormControl>
  );
};
