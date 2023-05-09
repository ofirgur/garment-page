import * as React from 'react';

import { numberFormat } from '../../../utils/localization';
import { NumberFormatStyled } from './styled';

interface NumberFormatProps {
  number: number;
  locale?: string;
  options?: Record<string, string>;
}

const NumberFormat = ({ number, locale, options }: NumberFormatProps) => {
  return (
    <NumberFormatStyled>
      {numberFormat(options)(locale)(number)}
    </NumberFormatStyled>
  );
};

export default NumberFormat;
