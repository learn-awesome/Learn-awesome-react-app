import React from 'react';
import PropTypes from 'prop-types';

import Landing from './Landing';

// Global Styles
import GlobalStyles from '../styles/GlobalStyles';
import { AppWrapper } from '../styles/App';

class App extends React.Component {
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
  };

  // ************************ //
  render() {
    return (
      <AppWrapper>
        <GlobalStyles />
        <Landing />
      </AppWrapper>
    );
  }
}

// App ~ PropTypes ***************************** //

App.propTypes = {
  retrieveFromLocalStorage: PropTypes.func.isRequired,
};

// ********************************************** //

export default App;
