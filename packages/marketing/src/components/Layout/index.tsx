import * as React from 'react';
import { useQuery } from 'react-query';

import { usePageState } from '../../utils/state';
import { createAPIAction } from '../../utils/api';
import { LayoutStyled } from './styled';

const number = 123456.789;
const iso = '2023-05-08T13:00:17Z';

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
      <hr />
      <p>Use Localization:</p>
      <p>Number: {number}</p>
      <p>Format: {new Intl.NumberFormat(data.locale).format(number)}</p>
      <p>
        Currency:
        {new Intl.NumberFormat(data.locale, {
          style: 'currency',
          currency: data.currency,
        }).format(number)}
      </p>
      <p>ISO String: {iso}</p>
      <p>
        ISO to Date (from server):{' '}
        {new Intl.DateTimeFormat(data.locale).format(new Date(iso))}
      </p>
      <p>Date to ISO (to server): {new Date(iso).toISOString()}</p>
    </LayoutStyled>
  );
};

export default Layout;
