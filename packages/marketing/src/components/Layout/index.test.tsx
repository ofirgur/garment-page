import * as React from 'react';
import { render } from 'utils/test';

import Layout from './';

describe('Layout', () => {
  it('Should render correctly', () => {
    const { container } = render(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
