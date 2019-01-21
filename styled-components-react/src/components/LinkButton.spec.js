import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import { THEMES } from '../styles/variables';

import LinkButton, { LINK_BUTTON_VARIANTS } from './LinkButton';

const mockHREF = 'LINK';

const mockComponent = (theme, variant = LINK_BUTTON_VARIANTS.default) => (
  <ThemeProvider theme={{ mode: theme }}>
    <LinkButton
      href={mockHREF}
      variant={variant}
    >
      TEST
    </LinkButton>
  </ThemeProvider>
);
[
  THEMES.light,
  THEMES.dark,
].forEach((theme) => {
  Object.values(LINK_BUTTON_VARIANTS).forEach((variant) => {
    test(`renders correct link with ${theme} theme and ${variant} variant`, () => {
      expect(renderer.create(mockComponent(theme, variant)).toJSON()).toMatchSnapshot();
    });
  });
});
