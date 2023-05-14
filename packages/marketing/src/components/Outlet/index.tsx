import * as React from 'react';
import { useUserData } from './hooks';

import PageLoader from '../PageLoader';
import Layout from '../Layout';

const Outlet = () => {
  const { isLoading } = useUserData();

  return isLoading ? <PageLoader /> : <Layout />;
};

export default Outlet;
