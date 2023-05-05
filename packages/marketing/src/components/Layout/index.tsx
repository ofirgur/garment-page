import * as React from 'react';

import { LayoutStyled } from './styled';
import { LayoutProps } from './type';

const Layout = ({ children }: LayoutProps) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
