import * as React from 'react';

import { dateFormat } from '../../../utils/localization';
import { DateFormatStyled } from './styled';

interface DateFormatProps {
  date: string;
  locale?: string;
  options?: Record<string, string>;
}

const DateFormat = ({ date, locale, options }: DateFormatProps) => {
  return (
    <DateFormatStyled>{dateFormat(options)(locale)(date)}</DateFormatStyled>
  );
};

export default DateFormat;
