import Modal from '.';
import React from 'react';

import { render } from 'react-testing-library';

xdescribe('Given Modal', () => {
  const props = Object.freeze({});

  it('should be hidden when not in use', () => {
    const { debug } = render(<Modal {...props} />);
  });
});
