import * as React from 'react';

import { PageStateContextProvider } from '../../utils/state';
import { INITIAL_PAGE_STATE } from '../../utils/state/initial';
import ReactQueryProvider from '../ReactQueryProvider';
import ThemeProvider from '../Theme';
import Router from '../Router';
// import Outlet from '../Outlet';

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
