import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getColor } from '../utils/getColor';
import { withTheme } from '../utils/themeContext';
import {
  THEMES,
} from '../styles/variables';

import Heading from './Heading';
import LinkButton, { LINK_BUTTON_VARIANTS } from './LinkButton';
import Details from './Details';
import Logo from './Logo';

import './Card.css';

const ns = 'card';
const displayName = 'Card';

const propTypes = {
  theme: PropTypes.string.isRequired,
};

const Card = ({ theme }) => {
  const sideFrontClassNames = cx(
    `${ns}__side`,
    `${ns}__side__front`,
    {
      [`${ns}__side__front--light`]: theme === THEMES.light,
      [`${ns}__side__front--dark`]: theme === THEMES.dark,
    },
  );

  const sideBackClassNames = cx(
    `${ns}__side`,
    `${ns}__side__back`,
    {
      [`${ns}__side__back--light`]: theme === THEMES.light,
      [`${ns}__side__back--dark`]: theme === THEMES.dark,
    },
  );

  const colorGradient2 = getColor('--color-gradient2');
  const colorGradient4 = getColor('--color-gradient4');
  const colorScPink = getColor('--color-sc-pink');
  const colorScOrange = getColor('--color-sc-orange');

  const bottomColor = theme === THEMES.light ? colorScPink : colorGradient4;
  const topColor = theme === THEMES.light ? colorScOrange : colorGradient2;

  return (
    <div className={ns}>
      <div className={sideFrontClassNames}>
        <div className={`${ns}__side__front__heading-wrapper`}>
          <Heading bottomColor={bottomColor} topColor={topColor} />
        </div>
        <Logo alt="styled-components logo" src="images/sc-logo.png" />
        <Details>
          <span>Automatic critical CSS </span>
          <span>No class name bugs</span>
          <span>Easier deletion of CSS</span>
          <span>Simple dynamic styling</span>
          <span>Painless maintenance</span>
          <span>Automatic vendor prefixing</span>
        </Details>
        <div className={`${ns}__side__front__buttons-bottom`}>
          <LinkButton href="https://www.styled-components.com/docs/" target="_blank" variant={LINK_BUTTON_VARIANTS.transparentDark}>Documentation</LinkButton>
        </div>
      </div>
      <div className={sideBackClassNames}>
        <div className={`${ns}__side__back__buttons-centered`}>
          <LinkButton href="https://github.com/styled-components/styled-components" target="_blank">Github</LinkButton>
          <LinkButton href="https://www.styled-components.com/docs/" target="_blank" variant={LINK_BUTTON_VARIANTS.transparent}>Documentation</LinkButton>
        </div>
      </div>
    </div>
  );
};

Card.displayName = displayName;
Card.propTypes = propTypes;

export default withTheme(Card);
