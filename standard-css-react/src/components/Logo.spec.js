import React from 'react';
import { mount } from 'enzyme';

import { ThemeProvider } from '../utils/themeContext';
import { THEMES } from '../styles/variables';

import Logo from './Logo';

const mockSrc = 'TEST_URL';
const mockAlt = 'TEST_IMAGE';

const renderComponent = ({
  theme,
}) => mount(
  <ThemeProvider value={theme}>
    <Logo
      src={mockSrc}
      alt={mockAlt}
    />
  </ThemeProvider>,
);

[
  THEMES.light,
  THEMES.dark,
].forEach((theme) => {
  describe(`${theme} theme`, () => {
    test('renders correct HTML', () => {
      expect(renderComponent({ theme })).toMatchSnapshot();
    });
  });
});
