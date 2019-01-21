import React from 'react';
import PropTypes from 'prop-types';

import './Details.css';

const ns = 'details';

const displayName = 'Details';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Details = ({ children }) => (
  <ul className={ns}>
    {children.map(child => <li className={`${ns}__item`} key={child.props.children}>{child}</li>)}
  </ul>
);

Details.displayName = displayName;
Details.propTypes = propTypes;

export default Details;
