import * as React from 'react';
import { render } from 'utils/test';

import Outlet from './';

describe('Outlet', () => {
  it('Should render correctly', () => {
    const { container } = render(<Outlet />);
    expect(container).toMatchSnapshot();
  });
});
