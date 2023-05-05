import * as React from 'react';

import Theme from '../Theme';
import Layout from '../Layout';
import Router from '../Router';

const App = () => {
  return (
    <Theme>
      <Layout>
        <Router />
      </Layout>
    </Theme>
  );
};

export default App;
