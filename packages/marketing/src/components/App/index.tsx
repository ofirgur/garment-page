import * as React from 'react';

import ReactQueryProvider from '../ReactQueryProvider';
import Theme from '../Theme';
import Router from '../Router';
// import Outlet from '../Outlet';

const App = () => {
  return (
    <Theme>
      <ReactQueryProvider>
        <Router />
      </ReactQueryProvider>
    </Theme>
  );
};

export default App;
