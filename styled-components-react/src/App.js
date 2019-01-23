import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import styledTheming from 'styled-theming';

import Card from './components/Card';
import ThemeSwitcher from './components/ThemeSwitcher';
import Global from './styles/global';
import Normalize from './styles/normalize';
import { THEMES, COLORS, BREAKPOINTS } from './styles/variables';

const themeProps = styledTheming('mode', {
  [THEMES.light]: css`
    background: ${COLORS.scOrange};
  `,
  [THEMES.dark]: css`
  background: linear-gradient(to top right, ${COLORS.gradient1}, ${COLORS.gradient2}, ${COLORS.gradient3}, ${COLORS.gradient4});
`,
});

const CustomFlex = styled.div`
  ${themeProps};
  width: 100vw;
  height: 100vh;
  min-height: 56rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${BREAKPOINTS.desktop} {
    padding-top: 6rem;
  }
`;

class App extends Component {
  state = {
    theme: THEMES.light,
  }

  handleThemeChange = () => {
    this.setState(prevState => ({
      theme: prevState.theme === THEMES.dark ? THEMES.light : THEMES.dark,
    }));
  }

  render() {
    const { theme } = this.state;

    return (
      <Fragment>
        <Normalize />
        <Global />
        <ThemeProvider theme={{ mode: theme }}>
          <CustomFlex>
            <Card />
            <ThemeSwitcher onThemeChange={this.handleThemeChange} theme={theme} />
          </CustomFlex>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
