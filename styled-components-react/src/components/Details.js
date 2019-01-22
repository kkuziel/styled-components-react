import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLORS } from '../styles/variables';

const DetailsWrapper = styled.ul`
  list-style: none;
  padding: 0 4rem;
  margin: 4rem auto .6rem;
`;

const Item = styled.li`
  text-align: center;
  font-size: 1.4rem;
  padding: 1rem;
  color: ${COLORS.darkGrey};

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.alphaBlack};
  }
`;

const displayName = 'Details';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const Details = ({ children }) => (
  <DetailsWrapper>
    {children.map(child => <Item key={child.props.children}>{child}</Item>)}
  </DetailsWrapper>
);

Details.displayName = displayName;
Details.propTypes = propTypes;

export default Details;
