export const filterCheckedValues = (array: CheckboxListItem[]) => {
  const values: { id: number }[] = [];

  array.forEach(({ id, checked }) => {
    if (checked) values.push({ id });
  });

  return values;
};

export const addedErrorOnField = (errors: ErrorObject[], inputs: InputData[]) => {
  const newInputs = inputs.map((item) => {
    const errorItem = errors?.find((error) => error.attr === item.field);
    return errorItem
      ? {
          ...item,
          helperText: errorItem.detail,
          invalid: true,
        }
      : {
          ...item,
          helperText: "",
          invalid: false,
        };
  });

  return newInputs;
};
