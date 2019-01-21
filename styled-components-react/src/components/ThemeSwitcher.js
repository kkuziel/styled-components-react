import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { COLORS, THEMES } from '../styles/variables';

const displayName = 'ThemeSwitcher';

const ThemeSwitcherWrapper = styled.div`
  margin: 2rem;
  width: 4rem;
  height: 2rem;
`;

const Switch = styled.div`
  cursor: pointer;
  text-indent: -999rem;
  width: 100%;
  height: 100%;
  background: ${COLORS.scPink};
  display: block;
  border-radius: 10rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 10%;
    left: 5%;
    width: 50%;
    height: 80%;
    background: ${COLORS.white};
    border-radius: 50%;
    transition: 0.5s;
  }

  ${({ checked }) => (checked && css`
      &::after {
        left: calc(100% - .5rem);
        transform: translateX(-100%);
      }
      background: ${COLORS.grey};
  `)}
`;

const propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

const ThemeSwitcher = ({ theme, onThemeChange }) => (
  <ThemeSwitcherWrapper>
    <Switch onClick={onThemeChange} checked={theme === THEMES.dark} />
  </ThemeSwitcherWrapper>
);

ThemeSwitcher.displayName = displayName;
ThemeSwitcher.propTypes = propTypes;

export default ThemeSwitcher;
