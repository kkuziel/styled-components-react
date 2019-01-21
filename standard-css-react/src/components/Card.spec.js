import React from 'react';

import { mount } from 'enzyme';

import { ThemeProvider } from '../utils/themeContext';
import { THEMES } from '../styles/variables';

import Card from './Card';

const mockColors = {
  '--color-gradient2': '#667db6',
  '--color-gradient4': '#0082c8',
  '--color-sc-pink': 'rgb(219, 112, 147)',
  '--color-sc-orange': 'rgb(218, 163, 87)',
};

jest.mock('../utils/getColor', () => ({
  getColor(variable) {
    return mockColors[variable];
  },
}));

const renderComponent = ({
  theme = THEMES.light,
}) => mount(
  <ThemeProvider value={theme}>
    <Card />
  </ThemeProvider>,
);

test('renders correct HTML', () => {
  const cmp = renderComponent({});
  expect(cmp).toMatchSnapshot();
});

[
  { theme: THEMES.light, bottomColor: mockColors['--color-sc-pink'], topColor: mockColors['--color-sc-orange'] },
  { theme: THEMES.dark, bottomColor: mockColors['--color-gradient4'], topColor: mockColors['--color-gradient2'] },
].forEach(({ theme, bottomColor, topColor }) => {
  test(`should Heading have correct props for ${theme} theme`, () => {
    const cmp = renderComponent({ theme });

    expect(cmp.find('Heading').props().bottomColor).toEqual(bottomColor);
    expect(cmp.find('Heading').props().topColor).toEqual(topColor);
  });
});
