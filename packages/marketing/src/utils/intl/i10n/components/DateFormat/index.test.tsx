import * as React from 'react';
import { render } from 'utils/test';

import DateFormat from './index';

const props = {
  date: '2023-05-08T13:00:17Z',
  locale: 'en-GB',
};

describe('DateFormat', () => {
  test('Should render correctly', () => {
    const { container } = render(<DateFormat {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('Should render correctly with options', () => {
    const { container } = render(
      <DateFormat
        {...props}
        options={{
          dateStyle: 'full',
          timeStyle: 'long',
          timeZone: 'Australia/Sydney',
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
