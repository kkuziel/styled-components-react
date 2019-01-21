import React, { Component } from 'react';
import cx from 'classnames';

import Card from './components/Card';
import ThemeSwitcher from './components/ThemeSwitcher';

import { ThemeProvider } from './utils/themeContext';
import { THEMES } from './styles/variables';

import './styles/normalize.css';
import './styles/global.css';
import './App.css';

const displayName = 'App';
const ns = 'app';

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
    const classNames = cx(
      ns,
      {
        [`${ns}--light`]: theme === THEMES.light,
        [`${ns}--dark`]: theme === THEMES.dark,
      },
    );

    return (
      <ThemeProvider value={theme}>
        <div className={classNames}>
          <Card />
          <ThemeSwitcher onThemeChange={this.handleThemeChange} theme={theme} />
        </div>
      </ThemeProvider>
    );
  }
}

App.displayName = displayName;

export default App;
