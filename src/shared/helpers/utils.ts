import { MONTH_NAMES_RU, WEEKDAY_NAMES_RU } from "shared/constants";

export const declinationOfNumber = <T>(number: number, wordForms: T[]) => {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return wordForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return wordForms[1];
  }
  if (n1 === 1) {
    return wordForms[0];
  }
  return wordForms[2];
};

export const getValueFromArray = <T>(array: InputData[]) => {
  const values = {} as T;
  array.forEach(({ field, value }) => {
    (values as any)[field] = value;
  });

  return values;
};
