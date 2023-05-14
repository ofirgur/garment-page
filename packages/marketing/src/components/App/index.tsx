import * as React from 'react';
import { RouterProvider } from 'react-router-dom';

import { PageStateContextProvider } from '../../utils/state';
import { INITIAL_PAGE_STATE } from '../../utils/state/initial';
import ReactQueryProvider from '../../utils/api/components/ReactQueryProvider';
import ThemeProvider from '../../utils/theme/components/ThemeProvider';
import '../../utils/intl/i18n';
import { AppProps } from './type';

const App = ({ router }: AppProps) => {
  return (
    <PageStateContextProvider initialState={INITIAL_PAGE_STATE}>
      <ThemeProvider>
        <ReactQueryProvider>
          <RouterProvider router={router} />
        </ReactQueryProvider>
      </ThemeProvider>
    </PageStateContextProvider>
  );
};

export default App;
