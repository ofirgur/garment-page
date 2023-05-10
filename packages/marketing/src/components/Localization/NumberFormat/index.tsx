import * as React from 'react';

import { numberFormat } from '../../../utils/localization/i10n';
import { NumberFormatStyled } from './styled';

interface NumberFormatProps {
  number?: number;
  locale?: string;
  options?: Record<string, string>;
}

const NumberFormat = ({ number, locale, options }: NumberFormatProps) => {
  return (
    <NumberFormatStyled>
      {numberFormat(number, locale, options)}
    </NumberFormatStyled>
  );
};

export default NumberFormat;
