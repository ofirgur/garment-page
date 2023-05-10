import * as React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { usePageState } from '../../utils/state';
import { createAPIAction } from '../../utils/api';
import DateFormat from '../Intl/DateFormat';
import NumberFormat from '../Intl/NumberFormat';
import { LayoutStyled } from './styled';

const Layout = () => {
  const { t, i18n } = useTranslation();
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
            lang: 'fr',
          },
        },
      },
    ),
  );

  const isoString = new Date().toISOString();
  const number = 123456.789;

  console.log('pageState: ', pageState);
  console.log('data: ', data);

  const handleClick = () => {
    setPageState({
      user: {
        ...pageState.user,
        ...data,
      },
    });
  };

  const handleLang = () => {
    i18n.changeLanguage(data.lang);
  };

  if (isLoading) return <LayoutStyled>Loading</LayoutStyled>;

  return (
    <LayoutStyled>
      <h1>{t('Welcome.Text')}</h1>
      <hr />
      <p>
        <button onClick={handleClick}>Add to State</button>
      </p>
      <p>
        <button onClick={handleLang}>Change Lang</button>
      </p>
      <hr />
      <p>User: {data.name}</p>
      <p>Locale: {data.locale}</p>
      <p>Currency: {data.currency}</p>
      <hr />
      <p>ISO String: {isoString}</p>
      <p>DateFormat:</p>
      <DateFormat date={isoString} locale={data.locale} />
      <hr />
      <p>Number: {number}</p>
      <p>NumberFormat</p>
      <NumberFormat number={number} locale={data.locale} />
      <p>Currency</p>
      <NumberFormat
        number={number}
        locale={data.locale}
        options={{
          style: 'currency',
          currency: data.currency,
        }}
      />
    </LayoutStyled>
  );
};

export default Layout;
