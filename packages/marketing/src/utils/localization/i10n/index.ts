export const numberFormat = (
  number?: number,
  locales?: string | string[],
  options?: Intl.NumberFormatOptions,
) => new Intl.NumberFormat(locales, options).format(number | 0);

export const dateFormat = (
  date?: string | number | Date,
  locale?: string | string[],
  options?: Intl.DateTimeFormatOptions,
) => new Intl.DateTimeFormat(locale, options).format(new Date(date));

// convert from server
export const isoStringToDate = (isoString: string) => {
  return new Date(isoString);
};

// send to server
export const dateToISOString = (date: Date) => {
  return date.toISOString();
};
