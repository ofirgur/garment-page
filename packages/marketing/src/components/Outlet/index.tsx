import * as React from 'react';
import { useQuery } from 'react-query';

import { createAPIAction } from '../../utils/http/api';

const Outlet = () => {
  const { data } = useQuery(
    ['repo'],
    createAPIAction({
      url: 'users',
    }),
  );

  console.log('data: ', data);
  return <>Outlet</>;
};

export default Outlet;
