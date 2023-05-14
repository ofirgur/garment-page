import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageState } from 'utils/state';
import DateFormat from 'utils/intl/i10n/components/DateFormat';
import NumberFormat from 'utils/intl/i10n/components/NumberFormat';
import { LayoutStyled } from './styled';

const Layout = () => {
  const { t, i18n } = useTranslation();
  const {
    pageState: { user },
  } = usePageState();
  console.log('user: ', user);

  const isoString = new Date().toISOString();
  const number = 123456.789;

  const handleClick = () => i18n.changeLanguage('en');

  return (
    <LayoutStyled>
      <h1>{t('Welcome.Text')}</h1>
      <button onClick={handleClick}>Change to English</button>
      <hr />
      <p>User: {user.name}</p>
      <p>Locale: {user.locale}</p>
      <p>Currency: {user.currency}</p>
      <hr />
      <p>ISO String: {isoString}</p>
      <p>DateFormat:</p>
      <DateFormat date={isoString} locale={user.locale} />
      <hr />
      <p>Number: {number}</p>
      <p>NumberFormat:</p>
      <NumberFormat number={number} locale={user.locale} />
      <p>Currency Format:</p>
      <NumberFormat
        number={number}
        locale={user.locale}
        options={{
          style: 'currency',
          currency: user.currency,
        }}
      />
    </LayoutStyled>
  );
};

export default Layout;
