import * as React from 'react';
import { useQuery } from 'react-query';

import { usePageState } from '../../utils/state';
import { createAPIAction } from '../../utils/api';
import { LayoutStyled } from './styled';

const Layout = () => {
  const { pageState, setPageState } = usePageState();
  const { data } = useQuery(
    ['repo'],
    createAPIAction({
      url: 'users',
    }),
  );

  console.log('pageState: ', pageState);
  console.log('data: ', data);

  const handleClick = () => {
    setPageState({
      users: [...pageState.users, { firstName: 'Michael', lastName: 'Jordan' }],
    });
  };

  return (
    <LayoutStyled>
      Layout
      <hr />
      <button onClick={handleClick}>Add to State</button>
    </LayoutStyled>
  );
};

export default Layout;
