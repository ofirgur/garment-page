import * as React from 'react';
import { render } from 'utils/test';

import PageLoader from './';

describe('PageLoader', () => {
  it('Should render correctly', () => {
    const { container } = render(<PageLoader />);
    expect(container).toMatchSnapshot();
  });
});
