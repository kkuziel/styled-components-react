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
  const cmp = renderComponent({});
  expect(cmp).toMatchSnapshot();
});

[
  { theme: THEMES.light, bottomColor: 'rgb(219, 112, 147)', topColor: 'rgb(218, 163, 87)' },
  { theme: THEMES.dark, bottomColor: '#667db6', topColor: '#0082c8' },
].forEach(({ theme, bottomColor, topColor }) => {
  test(`should Heading have correct props for ${theme} theme`, () => {
    const cmp = renderComponent({ theme });

    expect(cmp.find('Heading').props().bottomColor).toEqual(bottomColor);
    expect(cmp.find('Heading').props().topColor).toEqual(topColor);
  });
});
