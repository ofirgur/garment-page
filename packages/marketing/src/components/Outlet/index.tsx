import * as React from 'react';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { createAPIAction } from '../../utils/api';
import { usePageState } from '../../utils/state';
import PageLoader from '../PageLoader';
import Layout from '../Layout';

const Outlet = () => {
  const { setPageState } = usePageState();
  const { i18n } = useTranslation();
  const { isLoading } = useQuery(
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
            lang: 'ja',
          },
        },
      },
    ),
    {
      onSuccess: (res: any) => {
        i18n.changeLanguage(res.lang);
        setPageState({
          user: {
            ...res.user,
            ...res,
          },
        });
      },
    },
  );

  return isLoading ? <PageLoader /> : <Layout />;
};

export default Outlet;
