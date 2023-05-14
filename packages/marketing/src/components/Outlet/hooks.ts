import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { createAPIAction, lazyMock } from 'utils/api';
import { usePageState } from 'utils/state';

export const useUserData = () => {
  const { setPageState } = usePageState();
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
};
