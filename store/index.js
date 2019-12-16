import React from 'react';

// Creating a Context Store for our App

const { Provider, Consumer } = React.createContext();

// **************************************** //

class StoreProvider extends React.Component {
  state = {
    //  Theme toggle variable
    isDarkThemeActive: false,
  };

  // ******************************************** //

  // Toggle current active theme ~ Light / Dark

  toggleActiveTheme = () => {
    // First I'm updaing my State for Theme Change

    this.setState(prevState => ({ isDarkThemeActive: !prevState.isDarkThemeActive }));

    // Second After State Update, I'm also persisting currrent Active Theme in LocalStorage

    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!this.state.isDarkThemeActive));
  };

  // ******************************************** //

  /* Main function to retrieve App state from Local Storage / Session Storage.
      - isDarkThemeActive
  */

  retrieveFromLocalStorage = isDarkThemeActive => {
    if (isDarkThemeActive) {
      this.setState({ isDarkThemeActive: JSON.parse(isDarkThemeActive) });
    }
    // No else clause here.
  };

  // ********************************************* //

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          toggleActiveTheme: this.toggleActiveTheme,
          retrieveFromLocalStorage: this.retrieveFromLocalStorage,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreProvider, Consumer as StoreConsumer };
