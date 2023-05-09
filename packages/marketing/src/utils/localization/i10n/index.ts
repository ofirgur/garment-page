export const numberFormat =
  (options?: Record<string, string>) =>
  (locale: string) =>
  (number: number) => {
    if (!number) return;

    return new Intl.NumberFormat(locale, options).format(number);
  };

export const dateFormat =
  (options: Record<string, string>) => (locale: string) => (date: string) => {
    if (!date || date === '') return;

    return new Intl.DateTimeFormat(locale, options).format(new Date(date));
  };

// convert from server
export const isoStringToDate = (isoString: string) => {
  return new Date(isoString);
};

// send to server
export const dateToISOString = (date: Date) => {
  return date.toISOString();
};
