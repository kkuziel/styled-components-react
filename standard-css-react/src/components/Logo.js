import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { withTheme } from '../utils/themeContext';
import { THEMES } from '../styles/variables';

import './Logo.css';

const ns = 'logo';
const displayName = 'Logo';

const propTypes = {
  theme: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Logo = (props) => {
  const { theme, alt } = props;
  const classNames = cx(
    [`${ns}`],
    {
      [`${ns}--light`]: theme === THEMES.light,
      [`${ns}--dark`]: theme === THEMES.dark,
    },
  );
  return (
    <img className={classNames} alt={alt} {...props} />);
};

Logo.displayName = displayName;
Logo.propTypes = propTypes;

export default withTheme(Logo);
