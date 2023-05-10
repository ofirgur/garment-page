import * as React from 'react';
import { render } from 'utils/test';

import NumberFormat from './index';

const props = {
  number: 123456.789,
  locale: 'ja-JP',
};

describe('NumberFormat', () => {
  test('Should render correctly', () => {
    const { container } = render(<NumberFormat {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render correctly with options', () => {
    const { container } = render(
      <NumberFormat
        {...props}
        options={{
          style: 'currency',
          currency: 'JPY',
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
