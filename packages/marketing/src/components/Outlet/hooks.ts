import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { createAPIAction, lazyMock } from 'utils/api';
import { usePageState } from 'utils/state';

export const useUserData = () => {
  const { pageState, setPageState } = usePageState();
  const { i18n } = useTranslation();
  return useQuery(
    ['repo'],
    createAPIAction(
      {
        url: 'users/1',
      },
      lazyMock(() => import('./mock')),
    ),
    {
      onSuccess: (response: any) => {
        i18n.changeLanguage(response.lang);
        setPageState({
          user: {
            ...pageState.user,
            ...response,
          },
        });
      },
    },
  );
};
