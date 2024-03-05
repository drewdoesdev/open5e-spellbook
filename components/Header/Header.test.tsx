import React from 'react';
import { render } from '@testing-library/react-native'

import { Header } from './Header';

describe('<Header />', () => {
  it('Renders with correct text', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Midgard Spellbook')).toBeDefined;
  });
});