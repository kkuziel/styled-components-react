import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import { THEMES } from '../styles/variables';

import Details from './Details';

const mockComponent = theme => (
  <ThemeProvider theme={{ mode: theme }}>
    <Details>
      <span>TEST</span>
      <span>TEST2</span>
      <span>TEST3</span>
    </Details>
  </ThemeProvider>
);
[
  THEMES.light,
  THEMES.dark,
].forEach((theme) => {
  const cmp = renderer.create(mockComponent(theme)).toJSON();

  describe(`${theme} theme`, () => {
    test('renders correctly child elements ', () => {
      expect(cmp).toMatchSnapshot();
      expect(cmp.children.length).toEqual(3);
    });

    test('should list item have correct font size', () => {
      expect(cmp.children[0]).toHaveStyleRule('font-size', '1.4rem');
    });
  });
});
