export const baseApiUrl = import.meta.env.VITE_API_URL;
export const authApiUrl = import.meta.env.VITE_AUTH_URL;

export const MONTH_NAMES_RU: string[] = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

export const WEEKDAY_NAMES_RU: string[] = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

export const currencySymbols: { [key: string]: string } = {
  USD: "$",
  RUB: "₽",
  EUR: "€",
};
