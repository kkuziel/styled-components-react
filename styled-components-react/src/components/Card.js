import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import styledTheming from 'styled-theming';

import Heading from './Heading';
import LinkButton, { LINK_BUTTON_VARIANTS } from './LinkButton';
import Details from './Details';
import Logo from './Logo';

import {
  COLORS, GRADIENTS, THEMES, BREAKPOINTS,
} from '../styles/variables';
import { CenterElements } from '../styles/commonStyles';

const gradient = styledTheming('mode', {
  [THEMES.light]: GRADIENTS.light,
  [THEMES.dark]: GRADIENTS.dark,
});

const Side = css`
  height: 100%;
  width: 100%;
  transition: all 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border-radius: .5rem;
  overflow: hidden;
  box-shadow: .5rem 1rem 4rem ${COLORS.alphaBlack};
  background: ${COLORS.white};
`;

const SideFront = styled.div`
  ${Side};
`;

const SideBack = styled.div`
  ${Side}
  transform: rotateY(180deg);
  background: ${gradient};
`;

const CardWrapper = styled.div`
  width: 26rem;
  height: 47rem;
  perspective: 150rem;
  position: relative;

  @media ${BREAKPOINTS.desktop} {
    height: 44rem;

    &:hover ${SideFront} {
      transform: rotateY(-180deg);
    }

    &:hover ${SideBack} {
      transform: rotateY(0);
    }
  }
`;

const HeadingWrapper = styled.div`
  margin: -.1rem;
  width: calc(100% + .2rem);
  height: 13.2rem;
`;

const ButtonsCentered = styled(CenterElements)`
  padding: .1rem;
`;

const ButtonsBottom = styled.div`
  text-align: center;

  @media ${BREAKPOINTS.desktop} {
    display: none;
  }
`;

const displayName = 'Card';

const propTypes = {
  theme: PropTypes.shape({
    mode: PropTypes.string,
  }).isRequired,
};

const Card = ({ theme }) => {
  const bottomColor = theme.mode === THEMES.light ? COLORS.scPink : COLORS.gradient4;
  const topColor = theme.mode === THEMES.light ? COLORS.scOrange : COLORS.gradient2;

  return (
    <CardWrapper>
      <SideFront>
        <HeadingWrapper>
          <Heading bottomColor={bottomColor} topColor={topColor} />
        </HeadingWrapper>
        <Logo alt="styled-components logo" src="/images/sc-logo.png" />
        <Details>
          <span>Automatic critical CSS </span>
          <span>No class name bugs</span>
          <span>Easier deletion of CSS</span>
          <span>Simple dynamic styling</span>
          <span>Painless maintenance</span>
          <span>Automatic vendor prefixing</span>
        </Details>
        <ButtonsBottom>
          <LinkButton href="https://www.styled-components.com/docs/" target="_blank" variant={LINK_BUTTON_VARIANTS.transparentDark}>Documentation</LinkButton>
        </ButtonsBottom>
      </SideFront>
      <SideBack>
        <ButtonsCentered>
          <LinkButton href="https://github.com/styled-components/styled-components" target="_blank">Github</LinkButton>
          <LinkButton href="https://www.styled-components.com/docs/" target="_blank" variant={LINK_BUTTON_VARIANTS.transparent}>Documentation</LinkButton>
        </ButtonsCentered>
      </SideBack>
    </CardWrapper>
  );
};

Card.displayName = displayName;
Card.propTypes = propTypes;

export default withTheme(Card);
