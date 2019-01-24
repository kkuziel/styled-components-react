import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'Heading';

const propTypes = {
  bottomColor: PropTypes.string,
  topColor: PropTypes.string,
};

const defaultProps = {
  bottomColor: '#000',
  topColor: '#FFF',
};

const Heading = ({ bottomColor, topColor }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      <linearGradient id="heading-linear-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: bottomColor }} />
        <stop offset="100%" style={{ stopColor: topColor }} />
      </linearGradient>
    </defs>
    <g>
      <path d="M0 0 L0 100 L100 80 L100 0 Z" fill="url(#heading-linear-gradient)" />
    </g>
  </svg>
);

Heading.displayName = displayName;
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
