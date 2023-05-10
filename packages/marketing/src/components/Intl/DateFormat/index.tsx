import * as React from 'react';

import { dateFormat } from '../../../utils/intl/i10n';
import { DateFormatStyled } from './styled';

interface DateFormatProps {
  date?: string | number | Date;
  locale?: string;
  options?: Record<string, string>;
}

const DateFormat = ({ date, locale, options }: DateFormatProps) => {
  return (
    <DateFormatStyled>{dateFormat(date, locale, options)}</DateFormatStyled>
  );
};

export default DateFormat;
