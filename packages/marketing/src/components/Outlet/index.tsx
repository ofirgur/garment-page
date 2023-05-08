import * as React from 'react';
import { useQuery } from 'react-query';

import { getData } from '../../utils/http/api';

const Outlet = () => {
  const { data } = useQuery(
    ['repo'],
    getData({
      url: 'users',
    }),
  );

  console.log('data: ', data);
  return <>Outlet</>;
};

export default Outlet;
