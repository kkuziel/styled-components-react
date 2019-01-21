import React from 'react';
import { mount } from 'enzyme';

import { ThemeProvider } from '../utils/themeContext';
import { THEMES } from '../styles/variables';

import LinkButton, { LINK_BUTTON_VARIANTS } from './LinkButton';

const mockHREF = 'LINK';


const renderComponent = ({
  theme,
  variant = LINK_BUTTON_VARIANTS.default,
}) => mount(
  <ThemeProvider value={theme}>
    <LinkButton
      href={mockHREF}
      variant={variant}
      theme={theme}
    >
      TEST
    </LinkButton>
  </ThemeProvider>,
);

[
  THEMES.light,
  THEMES.dark,
].forEach((theme) => {
  Object.values(LINK_BUTTON_VARIANTS).forEach((variant) => {
    test(`renders correct link with ${theme} theme and ${variant} variant`, () => {
      expect(renderComponent({ theme, variant })).toMatchSnapshot();
    });
  });
});
