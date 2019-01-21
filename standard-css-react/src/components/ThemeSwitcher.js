import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { THEMES } from '../styles/variables';

import './ThemeSwitcher.css';

const ns = 'theme-switcher';
const displayName = 'ThemeSwitcher';

const propTypes = {
  onThemeChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

const ThemeSwitcher = ({ theme, onThemeChange }) => {
  const switchClassNames = cx(
    [`${ns}__switch`],
    {
      [`${ns}__switch--dark`]: theme === THEMES.dark,
      [`${ns}__switch--light`]: theme === THEMES.light,
    },
  );
  return (
    <div className={ns}>
      <div className={switchClassNames} onClick={onThemeChange} />
    </div>
  );
};

ThemeSwitcher.displayName = displayName;
ThemeSwitcher.propTypes = propTypes;

export default ThemeSwitcher;
