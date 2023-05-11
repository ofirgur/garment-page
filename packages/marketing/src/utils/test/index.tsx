import {
  RenderOptions,
  RenderResult,
  render as rtlRender,
} from '@testing-library/react';

import * as React from 'react';
import { ReactElement } from 'react';
import ReactQueryProvider from 'utils/api/components/ReactQueryProvider';
import { PageStateContextProvider } from 'utils/state';
import { INITIAL_PAGE_STATE } from 'utils/state/initial';
import ThemeProvider from 'utils/theme/components/ThemeProvider';

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => {
  return rtlRender(
    <PageStateContextProvider initialState={INITIAL_PAGE_STATE}>
      <ThemeProvider>
        <ReactQueryProvider>{ui}</ReactQueryProvider>
      </ThemeProvider>
    </PageStateContextProvider>,
    options,
  );
};
