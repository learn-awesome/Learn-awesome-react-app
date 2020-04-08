import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Landing from './Landing';
// import NetworkLoader from '../utils/NetworkLoader';
import { darkThemeObject, lightThemeObject } from '../theme';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';
import { AppWrapper } from '../styles/App';

class App extends React.Component {
  state = {
    isMounted: false,
  };

  // Setting Intitial Store for Local / Session Storage Values
  componentDidMount() {
    this.setInitialStore();
  }

  // *********************** //

  setInitialStore = () => {
    const { retrieveFromLocalStorage } = this.props;

    // Theme Value ~ Boolean String.

    const themeBoolValue = window.localStorage.getItem('isDarkThemeActive');

    // Calling main Store's retrieveFromLocalStorage Function.

    retrieveFromLocalStorage(themeBoolValue);

    // In last, I'll update my component ~ isMounted to true.

    this.setState({ isMounted: true });
  };

  // ************************ //
  render() {
    const { isDarkThemeActive } = this.props;

    // const { isMounted } = this.state;

    // ^^ Temp ~ Theme check delayed ^^ //

    return (
      <ThemeProvider theme={isDarkThemeActive ? darkThemeObject : lightThemeObject}>
        <GlobalStyles />
        <AppWrapper>
          <Landing />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  retrieveFromLocalStorage: PropTypes.func.isRequired,
  isDarkThemeActive: PropTypes.bool,
};

export default App;
