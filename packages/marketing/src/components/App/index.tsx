import * as React from 'react';

import ReactQueryProvider from '../ReactQueryProvider';
import Theme from '../Theme';
import Layout from '../Layout';
import Outlet from '../Outlet';

const App = () => {
  return (
    <Theme>
      <ReactQueryProvider>
        <Layout>
          <Outlet />
        </Layout>
      </ReactQueryProvider>
    </Theme>
  );
};

export default App;
