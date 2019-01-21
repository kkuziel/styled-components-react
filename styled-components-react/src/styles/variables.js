export const COLORS = {
  gradient1: '#667db6',
  gradient2: '#0082c8',
  gradient3: '#0082c8',
  gradient4: '#667db6',

  white: '#fff',
  black: '#000',
  darkGrey: '#222',
  darkestGrey: '#111',

  grey: 'grey',
  palevioletred: 'palevioletred',

  scPink: 'rgb(219, 112, 147)',
  scOrange: 'rgb(218, 163, 87)',

  alphaBlack: 'rgba(0, 0, 0, 0.2)',
  alphaGrey: 'rgba(20, 20, 20, 0.1)',
};

export const THEMES = {
  light: 'light',
  dark: 'dark',
};

export const GRADIENTS = {
  light: `linear-gradient(to top right, ${COLORS.scPink}, ${COLORS.scOrange})`,
  dark: `linear-gradient(to top right, ${COLORS.gradient1}, ${COLORS.gradient2}, ${COLORS.gradient4})`,
};

export const BREAKPOINTS = {
  desktop: '(min-width: 1024px)',
};
