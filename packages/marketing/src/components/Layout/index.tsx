import * as React from 'react';
import { useQuery } from 'react-query';

import { createAPIAction } from '../../utils/http/api';
import { LayoutStyled } from './styled';

const Layout = () => {
  const { data } = useQuery(
    ['repo'],
    createAPIAction({
      url: 'users',
    }),
  );

  console.log('data: ', data);

  return <LayoutStyled>Layout</LayoutStyled>;
};

export default Layout;
