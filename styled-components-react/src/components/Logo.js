import React from 'react';
import styled from 'styled-components';
import styledTheming from 'styled-theming';

import { GRADIENTS, THEMES, ANIMATIONS } from '../styles/variables';

const gradient = styledTheming('mode', {
  [THEMES.light]: GRADIENTS.light,
  [THEMES.dark]: GRADIENTS.dark,
});

const StyledLogo = styled.img`
  position: absolute;
  top: 5rem;
  left: 30%;
  width: 40%;
  animation: ${ANIMATIONS.sway} 4s linear infinite;
  background: ${gradient};
`;

const displayName = 'Logo';

const Logo = props => <StyledLogo {...props} />;

Logo.displayName = displayName;

export default Logo;
