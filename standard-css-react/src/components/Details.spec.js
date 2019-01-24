import React from 'react';
import { mount } from 'enzyme';

import { ThemeProvider } from '../utils/themeContext';
import { THEMES } from '../styles/variables';

import Details from './Details';

const renderComponent = ({
  theme,
}) => mount(
  <ThemeProvider value={theme}>
    <Details>
      <span>TEST</span>
      <span>TEST2</span>
      <span>TEST3</span>
    </Details>
  </ThemeProvider>,
);

[
  THEMES.light,
  THEMES.dark,
].forEach((theme) => {
  const cmp = renderComponent({ theme });

  describe(`${theme} theme`, () => {
    test('renders correctly child elements', () => {
      expect(cmp).toMatchSnapshot();
      expect(cmp.find('li')).toHaveLength(3);
    });
  });
});
