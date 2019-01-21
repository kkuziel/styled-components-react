import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import { THEMES } from '../styles/variables';

import Logo from './Logo';

const mockSrc = 'TEST_URL';
const mockAlt = 'TEST_IMAGE';

const mockComponent = theme => (
  <ThemeProvider theme={{ mode: theme }}>
    <Logo
      src={mockSrc}
      alt={mockAlt}
    />
  </ThemeProvider>
);
[
  THEMES.light,
  THEMES.dark,
].forEach((theme) => {
  describe(`${theme} theme`, () => {
    const cmp = renderer.create(mockComponent(theme)).toJSON();
    test('renders correct HTML', () => {
      expect(cmp).toMatchSnapshot();
    });

    describe('image props and styles', () => {
      test('should have correct values', () => {
        expect(cmp.props.src).toEqual(mockSrc);
        expect(cmp.props.alt).toEqual(mockAlt);
      });

      test('should have width 40%', () => {
        expect(cmp).toHaveStyleRule('width', '40%');
      });
    });
  });
});
