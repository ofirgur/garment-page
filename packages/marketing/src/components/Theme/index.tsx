import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

interface ThemeProps {
  children: React.ReactNode;
}

const Theme = (props: ThemeProps) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
