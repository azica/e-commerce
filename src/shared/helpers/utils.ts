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

export const timeAgo = (dateString: string): string => {
  const now = new Date();
  const past = new Date(dateString);
  const secondsAgo = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [key, value] of Object.entries(intervals)) {
    const interval = Math.floor(secondsAgo / value);
    if (interval >= 1) {
      return `${interval} ${key}${interval > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};

export const getCurrentParams = (searchParams: URLSearchParams, list: CheckboxListItem[]): CheckboxListItem[] => {
  const currentParams = searchParams.get("prices")?.split("%") || [];
  if (currentParams.length > 0) {
    return list.map((el) => (currentParams.includes(el.value as string) ? { ...el, checked: true } : el));
  }
  return list;
};