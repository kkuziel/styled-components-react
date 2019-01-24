import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withTheme } from '../utils/themeContext';
import { THEMES } from '../styles/variables';

import './LinkButton.css';

export const LINK_BUTTON_VARIANTS = {
  transparent: 'transparent',
  transparentDark: 'transparentDark',
  default: 'default',
};

const ns = 'link-button';
const displayName = 'LinkButton';

const propTypes = {
  variant: PropTypes.string,
  theme: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const defaultProps = {
  variant: 'default',
};

const LinkButton = (props) => {
  const { theme, variant, children } = props;
  const classNames = cx(
    [`${ns}`],
    {
      [`${ns}--${variant}--light`]: theme === THEMES.light,
      [`${ns}--${variant}--dark`]: theme === THEMES.dark,
    },
  );

  return <a className={classNames} {...props}>{children}</a>;
};

LinkButton.displayName = displayName;
LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export default withTheme(LinkButton);
