export const filterCheckedValues = (
  array: CheckboxListItem[],
  defaultItem?: boolean,
) => {
  const values: { id: number | string }[] = [];

  array.map(({ id, checked }) => {
    if (checked) values.push({ id });
  });

  if (values.length == 0 && defaultItem) {
    values.push({ id: array[0].id });
  }

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
