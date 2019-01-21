import React from 'react';
import { mount } from 'enzyme';
import { THEMES } from '../styles/variables';
import ThemeSwitcher from './ThemeSwitcher';

const mockOnThemeChangeFn = jest.fn();

const renderComponent = ({
  theme = THEMES.light,
}) => mount(
  <ThemeSwitcher
    theme={theme}
    onThemeChange={mockOnThemeChangeFn}
  />,
);

beforeEach(() => {
  mockOnThemeChangeFn.mockReset();
});

[
  THEMES.light,
  THEMES.dark,
].forEach((theme) => {
  describe(`${theme} theme`, () => {
    test(`renders correct HTML for ${theme} theme`, () => {
      expect(renderComponent({ theme })).toMatchSnapshot();
    });
  });
});
