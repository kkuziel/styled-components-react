import React from 'react';
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import { THEMES } from '../styles/variables';

import Card from './Card';

const renderComponent = ({
  theme = THEMES.light,
}) => mount(
  <ThemeProvider theme={{ mode: theme }}>
    <Card
      theme={{ mode: theme }}
    />
  </ThemeProvider>,
);

test('renders correct HTML', () => {
  expect(renderComponent({})).toMatchSnapshot();
});

[
  { theme: THEMES.light, bottomColor: 'rgb(219, 112, 147)', topColor: 'rgb(218, 163, 87)' },
  { theme: THEMES.dark, bottomColor: '#667db6', topColor: '#0082c8' },
].forEach(({ theme, bottomColor, topColor }) => {
  test(`should Heading have correct props for ${theme} theme`, () => {
    const headingProps = renderComponent({ theme }).find('Heading').props();

    expect(headingProps.bottomColor).toEqual(bottomColor);
    expect(headingProps.topColor).toEqual(topColor);
  });
});
