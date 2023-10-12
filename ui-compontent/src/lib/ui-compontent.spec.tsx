import { render } from '@testing-library/react';

import UiCompontent from './ui-compontent';

describe('UiCompontent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompontent />);
    expect(baseElement).toBeTruthy();
  });
});
