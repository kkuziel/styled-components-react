import React from 'react';

const { Consumer, Provider } = React.createContext();

// eslint-disable-next-line react/display-name
const withContext = () => Component => props => (
  <Consumer>
    {theme => <Component {...props} theme={theme} />}
  </Consumer>
);

export const withTheme = withContext();
export const ThemeProvider = Provider;
