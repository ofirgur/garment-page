import * as React from 'react';

import { PageStateContextProvider } from 'utils/state';
import { INITIAL_PAGE_STATE } from 'utils/state/initial';
import ReactQueryProvider from 'utils/api/components/ReactQueryProvider';
import ThemeProvider from 'utils/theme/components/ThemeProvider';
import 'utils/intl/i18n';
import Router from '../Router';

const App = () => {
  return (
    <PageStateContextProvider initialState={INITIAL_PAGE_STATE}>
      <ThemeProvider>
        <ReactQueryProvider>
          <Router />
        </ReactQueryProvider>
      </ThemeProvider>
    </PageStateContextProvider>
  );
};

export default App;
