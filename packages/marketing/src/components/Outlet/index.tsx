import * as React from 'react';
import { useQuery } from 'react-query';

import { getData } from '../../utils/http/api';

const Outlet = () => {
  const { data } = useQuery(
    ['repo'],
    getData({
      url: 'https://api.github.com/users/eunit99/repos',
    }),
  );

  console.log('data: ', data);
  return <>Outlet</>;
};

export default Outlet;
