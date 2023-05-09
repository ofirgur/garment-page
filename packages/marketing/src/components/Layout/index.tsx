import * as React from 'react';
import { useQuery } from 'react-query';

import { usePageState } from '../../utils/state';
import { createAPIAction } from '../../utils/api';
import { LayoutStyled } from './styled';

const Layout = () => {
  const { pageState, setPageState } = usePageState();
  const { isLoading, data } = useQuery(
    ['repo'],
    createAPIAction(
      {
        url: 'users/1',
      },
      {
        mockDelay: 2000,
        mockResponse: {
          status: 200,
          data: {
            id: 111,
            name: 'Ofir Gur',
            locale: 'ja-JP',
            currency: 'JPY',
          },
        },
      },
    ),
  );

  console.log('pageState: ', pageState);
  console.log('data: ', data);

  const handleClick = () => {
    setPageState({
      user: data,
    });
  };

  if (isLoading) return <LayoutStyled>Loading</LayoutStyled>;

  return (
    <LayoutStyled>
      Layout
      <hr />
      <p>
        Use API: <button onClick={handleClick}>Add to State</button>
      </p>
      <hr />
      <p>User: {data.name}</p>
      <p>Locale: {data.locale}</p>
      <p>Currency: {data.currency}</p>
    </LayoutStyled>
  );
};

export default Layout;
