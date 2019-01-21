import React from 'react';
import styled, { keyframes } from 'styled-components';
import styledTheming from 'styled-theming';

import { GRADIENTS, THEMES } from '../styles/variables';

const gradient = styledTheming('mode', {
  [THEMES.light]: GRADIENTS.light,
  [THEMES.dark]: GRADIENTS.dark,
});

const logoAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(5deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(-5deg);
  }
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 5rem;
  left: 30%;
  width: 40%;
  animation: ${logoAnimation} 4s linear infinite;
  background-image: ${gradient};
`;

const displayName = 'Logo';

const Logo = props => <StyledLogo {...props} />;

Logo.displayName = displayName;

export default Logo;
