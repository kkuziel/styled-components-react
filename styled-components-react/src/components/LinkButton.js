import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import styledTheming from 'styled-theming';

import { CustomLink } from '../styles/commonStyles';
import { COLORS, GRADIENTS, THEMES } from '../styles/variables';

export const LINK_BUTTON_VARIANTS = {
  transparent: 'transparent',
  transparentDark: 'transparentDark',
  default: 'default',
};

const themesProps = styledTheming.variants('mode', 'variant', {
  [LINK_BUTTON_VARIANTS.default]: {
    [THEMES.light]: css`
      color: ${COLORS.palevioletred};
      border-color: ${COLORS.white};
      background: ${COLORS.white};
    `,
    [THEMES.dark]: css`
      color: ${COLORS.black};
      background: ${COLORS.white};
      border-color: ${COLORS.white};
    `,
  },
  [LINK_BUTTON_VARIANTS.transparent]: {
    [THEMES.light]: css`
      color: ${COLORS.white};

      &:hover {
        background: ${COLORS.alphaGrey};
      }
    `,
    [THEMES.dark]: css`
      color: ${COLORS.white};
      border-color: ${COLORS.white};

      &:hover {
        background: ${COLORS.grey};
      }
    `,
  },
  [LINK_BUTTON_VARIANTS.transparentDark]: {
    [THEMES.light]: css`
      color: ${COLORS.white};
      border-color: ${COLORS.white};
      background: ${GRADIENTS.light};
    `,
    [THEMES.dark]: css`
      color: ${COLORS.white};
      border-color: ${COLORS.white};
      background: ${GRADIENTS.dark};
    `,
  },
});

const StyledLink = styled(CustomLink)`
  ${themesProps}
  text-transform: uppercase;
`;

const displayName = 'LinkButton';

const propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const defaultProps = {
  variant: 'default',
};

const LinkButton = (props) => {
  const { children } = props;
  return <StyledLink {...props}>{children}</StyledLink>;
};

LinkButton.displayName = displayName;
LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;

export default LinkButton;
