import {
  RenderOptions,
  RenderResult,
  render as rtlRender,
} from '@testing-library/react';

import * as React from 'react';
import { ReactElement } from 'react';
import Theme from 'components/Theme';

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => {
  return rtlRender(<Theme>{ui}</Theme>, options);
};
